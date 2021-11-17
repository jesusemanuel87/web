const mostrarMenu = document.querySelector('nav')
const contenidoMenu = document.querySelector('enlaces')


mostrarMenu.addEventListener('click', () => {
    mostrarMenu.classList.toggle('animacionMenu')
    contenidoMenu.classList.toggle('activeMenu')
});