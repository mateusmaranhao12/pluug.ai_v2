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
const track = document.getElementById('carouselTrack')
const indicatorsContainer = document.getElementById('carouselIndicators')
let currentIndex = 0

function createIndicators() {
    const totalCards = document.querySelectorAll('.carousel-card-oscar').length
    const itemsPerPage = window.innerWidth < 768 ? 1 : 3
    const totalPages = Math.ceil(totalCards / itemsPerPage)
    indicatorsContainer.innerHTML = ''

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button')
        button.onclick = () => moveToSlide(i)
        if (i === 0) button.classList.add('active')
        indicatorsContainer.appendChild(button)
    }
}

function moveToSlide(index) {
    const itemsPerPage = window.innerWidth < 768 ? 1 : 3
    const slideWidth = track.clientWidth / itemsPerPage
    const maxIndex = Math.ceil(document.querySelectorAll('.carousel-card-oscar').length / itemsPerPage) - 1

    if (index > maxIndex) index = maxIndex

    track.style.transform = `translateX(-${index * slideWidth * itemsPerPage}px)`

    const buttons = indicatorsContainer.querySelectorAll('button')
    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index)
    })

    currentIndex = index
}


window.addEventListener('resize', () => {
    createIndicators()
    moveToSlide(currentIndex)
})

window.onload = () => {
    createIndicators()
}

//modals
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'))
    document.getElementById(tabId).classList.add('active')

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'))
    document.getElementById('tab-' + tabId).classList.add('active')
}

function abrirModalPlanoAnual() {
    document.getElementById("modalPlanoAnual").style.display = "flex";
}

function fecharModalPlanoAnual() {
    document.getElementById("modalPlanoAnual").style.display = "none";
}

function abrirModalMetodoPagamento() {
    document.getElementById("modalMetodoPagamento").style.display = "flex";
}

function fecharModalMetodoPagamento() {
    document.getElementById("modalMetodoPagamento").style.display = "none";
}

function abrirModalAlterarEmail() {
    let modal = document.getElementById("modalAlterarEmail");
    modal.classList.add("ativo");
}

function fecharModalAlterarEmail() {
    let modal = document.getElementById("modalAlterarEmail");
    modal.classList.remove("ativo");
}

function abrirModalResumoPedido() {
    let modal = document.getElementById("modalResumoPedido");
    modal.classList.add("ativo");
}

function fecharModalResumoPedido() {
    let modal = document.getElementById("modalResumoPedido");
    modal.classList.remove("ativo");
}


// Fechar modal ao clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target.id === "modalPlanoAnual") {
        fecharModalPlanoAnual();
    }
    if (event.target.id === "modalMetodoPagamento") {
        fecharModalMetodoPagamento();
    }
    if (event.target.id === "modalAlterarEmail") {
        fecharModalAlterarEmail();
    }
    if (event.target.id === "modalResumoPedido") {
        fecharModalResumoPedido();
    }
};

//trocar aba em planos e assinatura
function trocarAba(aba) {
    // Remove a classe "ativo" de todas as abas e botões
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("ativo"));
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

    // Adiciona a classe "ativo" para a aba correspondente e para o botão
    document.getElementById(aba).classList.add("ativo");
    document.querySelector(`button[onclick="trocarAba('${aba}')"]`).classList.add("active");
}

//modal tutorial
function abrirModalTutorial(id) {
    document.getElementById(id).style.display = 'flex';
}

function fecharModalTutorial(id) {
    document.getElementById(id).style.display = 'none';
}

function fecharModalTutorialPorFora(event, id) {
    const modalContent = document.querySelector(`#${id} .modal-tutorial-content`);
    if (!modalContent.contains(event.target)) {
        fecharModalTutorial(id);
    }
}

//visualizar conteudo
function visualizarConteudo() {
    window.location.href = 'visualizar-conteudo.html'
}

//upload de arquivos leads ai
function handleFileUpload(event, tipo) {
    const file = event.target.files[0];
    if (file) {
        const spanId = tipo === 'template' ? 'nome-arquivo-template' : 'nome-arquivo-importar';
        document.getElementById(spanId).textContent = `Arquivo selecionado: ${file.name}`;
    }
}