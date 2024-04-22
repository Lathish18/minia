let isOpened = false; 
var navBar = document.getElementById('navBar');
function navFunction() {
  isOpened = !isOpened; 

  if (isOpened) {
    navBar.style.left = '-100%'; 
  } else {
    navBar.style.left = '0'; 
  }
}
