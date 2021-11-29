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

const optionsMenu = [ "inicio", "sobre", "resumo", "portfolio", "contato" ];

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
const enviarFormulario = document.querySelectorAll('.botao-formulario button')

for(const alerta of enviarFormulario){
    alerta.addEventListener('click', ()=>{
    window.alert('Portifólio em desenvolvimento...')
})
}
*/


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






/*for(const eventoAlerta of enviarFormulario){
    eventoAlerta.addEventListener('click', () =>{
        status.classList.toggle('status-positive')
        setTimeout(finish, timeOut)
    })    
}
*/



var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    const timeOut = 3000
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    console.log(status);
    console.log(data);
    const finish = () => { 
        status.classList.remove('status-negative')
        status.classList.remove('status-positive')
    }
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.classList.add('status-positive')
    status.innerHTML = "Mensagem recebida com sucesso, muito obrigado!";
    form.reset()
    setTimeout(finish, timeOut)
    }).catch(error => {
    status.classList.add('status-negative')
    status.innerHTML = "Oops!"
    setTimeout(finish, timeOut)
    });
}
form.addEventListener("submit", handleSubmit)

