document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  function animarCards() {
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        if (!card.classList.contains('animar-direita') &&
            !card.classList.contains('animar-esquerda') &&
            !card.classList.contains('animar-crescendo')) {
          // Intercala as animações
          if (i % 3 === 0) card.classList.add('animar-direita');
          else if (i % 3 === 1) card.classList.add('animar-esquerda');
          else card.classList.add('animar-crescendo');
        }
      }
    });
  }

  window.addEventListener('scroll', animarCards);
  animarCards(); // Para animar os que já estão visíveis ao carregar
});

function mostrarTexto(card) {
  card.classList.toggle('ativo');
}