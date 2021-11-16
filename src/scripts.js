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
