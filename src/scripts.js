const menu = document.querySelector('#header section div.tela-menu')
const openMenu = document.querySelectorAll('section .open-menu')
const closeMenu = document.querySelectorAll('section .close-menu')

for(const abrirMenu of openMenu){
    abrirMenu.addEventListener('click', () =>{
        menu.classList.toggle('active')
        document.body.style.overflow = "hidden"
    })
}

for(const fecharMenu of closeMenu){
    fecharMenu.addEventListener('click', () =>{
        menu.classList.toggle('active')
        document.body.style.overflow = "visible"
    })
}

const clickMenu = document.querySelectorAll('#header div.tela-menu nav ul li a')

for(const abreFechaMenu of clickMenu){
    abreFechaMenu.addEventListener('click', ()=>{
        menu.classList.remove('active')
        document.body.style.overflow = "visible"
    })
}

const optionsMenu = [ "inicio", "sobre", "resumo", "portifolio", "contato" ];

function toggle(sectionSelecionada) {
    let sections
    for(let i = 0; i < optionsMenu.length; i += 1) {
        sections = document.getElementById(optionsMenu[i]);
        sections.style.display = 'none';
    }
    sections = document.getElementById(sectionSelecionada);
    sections.style.display = 'block';
}


/*
const scrollTop = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
})

scrollTop.reveal(
    `.bottom-page, #main .imagem, #main .informacoes, .midias-sociais .midia`,
    {
        interval: 500
    }
)

const scrollBottom = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 500,
})

scrollBottom.reveal(
    `#footer`,
    {
        interval: 500
    }
)
*/
