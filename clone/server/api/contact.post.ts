import nodemailer from 'nodemailer'

/**
 * Contact form relay.
 *
 * Receives multipart/form-data from the careers/contact form (text fields
 * + optional resume file), renders a Hebrew RTL email, and sends it via
 * SMTP from the address configured in env vars to the client's recipient
 * inbox. Attachments are included as proper email attachments.
 *
 * The client (recipient) does nothing — they just receive the emails.
 *
 * Required env vars (set on Vercel + locally in clone/.env):
 *   NUXT_SMTP_HOST       e.g. smtp.gmail.com
 *   NUXT_SMTP_PORT       e.g. 465 (SSL) or 587 (STARTTLS)
 *   NUXT_SMTP_USER       e.g. yourdev@gmail.com
 *   NUXT_SMTP_PASS       Gmail app password / SMTP password
 *   NUXT_MAIL_FROM       optional override; defaults to NUXT_SMTP_USER
 *   NUXT_MAIL_TO         destination inbox, e.g. chocomen30@gmail.com
 */

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const host = config.smtpHost as string
  const port = Number(config.smtpPort) || 465
  const user = config.smtpUser as string
  const pass = config.smtpPass as string
  const from = (config.mailFrom as string) || user
  const to = config.mailTo as string

  if (!host || !user || !pass || !to) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service is not configured.'
    })
  }

  const parts = await readMultipartFormData(event)
  if (!parts) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid form data' })
  }

  const fields: Record<string, string> = {}
  let attachment: { filename: string; content: Buffer; contentType?: string } | null = null

  for (const part of parts) {
    if (!part.name) continue
    if (part.filename && part.data?.length) {
      // Reject anything > 5 MB to keep the function under Vercel's body limit
      if (part.data.length > 5 * 1024 * 1024) {
        throw createError({ statusCode: 413, statusMessage: 'הקובץ גדול מ-5MB' })
      }
      attachment = {
        filename: part.filename,
        content: part.data,
        contentType: part.type || undefined
      }
    } else if (part.data) {
      fields[part.name] = part.data.toString('utf-8')
    }
  }

  const purpose = fields['purpose'] === 'job' ? 'מעוניין בעבודה' : 'לקוח מעוניין'
  const subject = `פנייה חדשה מהאתר — ${purpose}`

  const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 12px;font-weight:600;background:#f5f5f5;border:1px solid #e5e5e5;">${label}</td>
         <td style="padding:8px 12px;border:1px solid #e5e5e5;">${escapeHtml(value)}</td></tr>`
      : ''

  const html = `
    <div dir="rtl" style="font-family:Heebo,Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a;">
      <h2 style="font-size:20px;margin:0 0 16px;border-bottom:2px solid #0071e3;padding-bottom:8px;">
        פנייה חדשה מאתר טל שולמרק
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
        ${row('סוג פנייה', purpose)}
        ${row('שם מלא', fields['fullName'] || '')}
        ${row('טלפון', fields['phone'] || '')}
        ${row('אימייל', fields['email'] || '')}
        ${row('הודעה', fields['note'] || '')}
      </table>
      ${attachment ? `<p style="margin-top:16px;font-size:13px;color:#666;">📎 קובץ קורות חיים מצורף.</p>` : ''}
      <p style="margin-top:24px;font-size:12px;color:#999;text-align:center;border-top:1px solid #e5e5e5;padding-top:12px;">
        נשלח אוטומטית ע"י טופס יצירת קשר באתר.
      </p>
    </div>
  `

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  })

  await transporter.sendMail({
    from,
    to,
    replyTo: fields['email'] || undefined,
    subject,
    html,
    attachments: attachment ? [attachment] : []
  })

  return { success: true }
})
