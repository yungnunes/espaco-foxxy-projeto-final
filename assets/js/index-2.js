document.querySelectorAll('#servicos .card').forEach(card => {
  const link = card.querySelector('a[href]');
  if (!link) return;
  card.style.cursor = 'pointer';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'link');
  card.addEventListener('click', event => {
    if (event.target.closest('a')) return;
    window.location.assign(link.href);
  });
  card.addEventListener('keydown', event => {
    if (event.target.closest('a')) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      window.location.assign(link.href);
    }
  });
});
