<template>
  <a
    class="whatsapp-fab"
    href="https://wa.me/972543199289"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="צור קשר בוואטסאפ"
  >
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.34-1.66a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.15 1.03 7.02 2.91a9.87 9.87 0 0 1 2.91 7.02c0 5.47-4.45 9.91-9.92 9.91zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.13 9.13 0 0 1-1.69-2.1c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.11 3.22 5.11 4.52.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  </a>
</template>

<style scoped>
.whatsapp-fab {
  position: fixed;
  bottom: 2.4rem;
  left: 2.4rem;
  z-index: 50;
  width: 5.4rem;
  height: 5.4rem;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.35), 0 4px 10px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.whatsapp-fab:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 16px 40px rgba(37, 211, 102, 0.45), 0 6px 14px rgba(0, 0, 0, 0.15);
}

.whatsapp-fab:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

@media only screen and (max-width: 833px) {
  .whatsapp-fab {
    bottom: 1.6rem;
    left: 1.6rem;
    width: 4.8rem;
    height: 4.8rem;
  }

  .whatsapp-fab svg {
    width: 24px;
    height: 24px;
  }
}

@media print {
  .whatsapp-fab {
    display: none;
  }
}
</style>
