function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var typed= new Typed(".section__text__p2",{
    strings:["CS Undergrad","Web Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop: true
    
      })