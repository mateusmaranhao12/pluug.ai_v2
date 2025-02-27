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
window.onclick = function (event) {
    const menu = document.getElementById('menuDropdown')
    if (!event.target.matches('.fa-chevron-down') && !event.target.closest('.menu-dropdown')) {
        menu.classList.remove('active')
    }
}

//Carrossel
const track = document.getElementById('carouselTrack');
const indicatorsContainer = document.getElementById('carouselIndicators');
let currentIndex = 0;

function createIndicators() {
    const totalCards = document.querySelectorAll('.carousel-card-oscar').length;
    const itemsPerPage = window.innerWidth < 768 ? 1 : 3;
    const totalPages = Math.ceil(totalCards / itemsPerPage);
    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.onclick = () => moveToSlide(i);
        if (i === 0) button.classList.add('active');
        indicatorsContainer.appendChild(button);
    }
}

function moveToSlide(index) {
    const itemsPerPage = window.innerWidth < 768 ? 1 : 3;
    const slideWidth = track.clientWidth / itemsPerPage;
    track.style.transform = `translateX(-${index * slideWidth * itemsPerPage}px)`;
    const buttons = indicatorsContainer.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

window.addEventListener('resize', () => {
    createIndicators();
    moveToSlide(currentIndex);
});

window.onload = () => {
    createIndicators();
};