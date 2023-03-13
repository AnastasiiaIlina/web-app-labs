var menuIcon = document.querySelector(".menu-icon");
var menu = document.querySelector(".menu");

menuIcon.onclick = function () {
  if (menu.classList.contains("displayNone")) {
    menu.classList.remove("displayNone");
    // nav.style.backgroundColor ='transparent';
    menuIcon.innerHTML = '<i class="fa fa-times fa-3x" aria-hidden="true"></i>';
  } else if (menu.classList.contains("displayNone") == false) {
    menu.className += " displayNone";
    // nav.style.backgroundColor ='rgba(243,74,79,0.7)';
    menuIcon.innerHTML = '<i class="fa fa-bars fa-2x" aria-hidden="true"></i>';
  }
};
