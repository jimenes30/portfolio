
/* <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup"></div> */

const menuOpcoes = document.querySelector('#navbarNavAltMarkup')
const navBotao = document.querySelector('#nav-botao')

const closeNavBar = () => {
    
    const navExpanded = navBotao.getAttribute('aria-expanded')
    if (navExpanded) {
      console.log(navExpanded)
      menuOpcoes.classList.remove('show')
    } else {
      console.log('Barra de navegação minimizada')
      menuOpcoes.classList.add('show')
    }
}

// navBotao.addEventListener('click', setInterval(closeNavBar, 1000))

// classList.add('show')
// classList.remove('show')

