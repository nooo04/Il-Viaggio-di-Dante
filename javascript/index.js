/*==================Menu hamburger Header=======================0*/
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navbar-menu").classList.toggle("show");
  });

  /*==================Inferno (canti)=======================*/
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'flex';
    });
  });

  document.querySelectorAll('.close-modal').forEach(span => {
    span.addEventListener('click', () => {
      span.closest('.modal-overlay').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.style.display = 'none';
    }
  });