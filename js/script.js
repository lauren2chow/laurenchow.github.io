const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function() {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky")
      } 
}

