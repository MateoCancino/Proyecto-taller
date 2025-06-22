//Side- menu 
const toggle = document.getElementById('menu-toggle');
const icon = document.getElementById('menu-icon');
const menu = document.getElementById('side-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    toggle.classList.toggle('open');

  // Cambiar ícono del menú
    icon.textContent = menu.classList.contains('show') ? 'close' : 'menu';
});;

// Opcional: cerrar al hacer clic en un enlace
document.querySelectorAll('.side__menu a').forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('show');
    toggle.classList.remove('open');
    icon.textContent = 'menu';
    });
});


