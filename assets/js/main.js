// ----------- SHOW MENU -----------
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  // validate that variables exist
  if (toggle && nav){
    // We add the show-menu class to the div tag with the nav__menu class
    toggle.addEventListener('click', () =>{
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// ----------- SHOW MENU -----------