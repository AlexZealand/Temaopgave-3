(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#site-navigation');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Luk navigation' : 'Åbn navigation');
  });
})();
