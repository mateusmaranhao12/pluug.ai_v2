document.addEventListener('DOMContentLoaded', () => {
    const centralAgentesLink = document.querySelector('.central-agentes-link')
    const centralAgentesItem = document.querySelector('.central-agentes-item')

    centralAgentesLink.addEventListener('click', () => {
        centralAgentesItem.classList.toggle('open')
    })
})

//menu dropdown
function toggleMenu() {
    const menu = document.getElementById('menuDropdown')
    menu.classList.toggle('active')
}

// Fecha o menu ao clicar fora dele
window.onclick = function(event) {
    const menu = document.getElementById('menuDropdown')
    if (!event.target.matches('.fa-chevron-down') && !event.target.closest('.menu-dropdown')) {
        menu.classList.remove('active')
    }
}