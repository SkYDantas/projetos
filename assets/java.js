// Select all elements with class 'abrir' inside elements with class 'janela'
const abrirJanela = document.querySelectorAll('.janela .abrir');

abrirJanela.forEach((abrir) => {
  abrir.addEventListener('click', (e) => {
    // Get the parent element with class 'janela'
    const janela = abrir.parentElement;
    // Check if the 'open' class is present in the parent element
    const isOpen = janela.classList.contains('open');

    if (isOpen) {
      janela.classList.remove('open');
    } else {
      janela.classList.add('open');
    }
  });
});

// Select the WhatsApp-style button with class 'whatsapp-button'
const whatsappButton = document.querySelector('.whatsapp-button');
whatsappButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.open(whatsappButton.href, '_blank');
});
