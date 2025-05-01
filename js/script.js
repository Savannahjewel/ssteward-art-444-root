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
const typewriter = document.querySelector(".typewriter");

typewriter.addEventListener("animationend", (e) => {
  if (e.animationName === "typing") {
    typewriter.style.borderRight = "none";
  }
});

const images = document.querySelectorAll(".gallery-images");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

images.forEach(image => {
  image.addEventListener("click", function() {
    modal.style.display = "block";  
    modalImg.src = this.src; 
  });
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";  
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
