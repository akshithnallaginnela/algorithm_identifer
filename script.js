const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

document.querySelector('.newsletter')?.addEventListener('submit', event => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  if (input?.value) {
    event.currentTarget.querySelector('button').textContent = 'Thank you';
    input.value = '';
  }
});
