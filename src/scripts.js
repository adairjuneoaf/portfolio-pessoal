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

const scrollTop = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
})

scrollTop.reveal(
    `#header, #main .imagem, #main .informacoes, .midias-sociais .midia`,
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
