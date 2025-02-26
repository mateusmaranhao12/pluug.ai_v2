document.addEventListener('DOMContentLoaded', () => {
    const centralAgentesLink = document.querySelector('.central-agentes-link');
    const centralAgentesItem = document.querySelector('.central-agentes-item');

    centralAgentesLink.addEventListener('click', () => {
        centralAgentesItem.classList.toggle('open');
    });
});