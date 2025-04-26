function revealMenu() {

    var menu = document.getElementById("menu");

    menu.classList.toggle("revealMenu");
  }
 
function lightMode () {

    const navDark = document.querySelectorAll('.navlink')

    document.body.classList.toggle("lightMode");
    document.getElementById("light-toggle").classList.toggle("light-change");

    for (let i = 0; i < navDark.length; i++){
      navDark[i].classList.toggle("navlink-lightmode");
    
    }
  }

 


if (new Date().getHours () > 18 ) {
  document.body.classList.toggle("lightMode");
}

