let isOpened = false; 
var navBar = document.getElementById('navBar');
function navFunction() {
  isOpened = !isOpened; 

  if (isOpened) {
    navBar.style.right = '-100%'; 
  } else {
    navBar.style.right = '0'; 
  }
}
