document.addEventListener('DOMContentLoaded', function () {
  const navButton = document.getElementById('dropdown');
  const navOptions = document.querySelector('.hiddennavbar');

  navButton.addEventListener('click', function () {
    if (navOptions.style.visibility === 'hidden' || navOptions.style.visibility === '') {
      navOptions.style.visibility = 'visible';
    } else {
      navOptions.style.visibility = 'hidden';
    }
  });
});
let prevScrollPos = window.pageYOffset;
const navOptions = document.querySelector('.hiddennavbar');

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    document.querySelector('.navbar').style.top = '0';
    navOptions.style.visibility = 'hidden';
  } else {
    // Scrolling down, hide the navbar
    document.querySelector('.navbar').style.top = '-12vh'; // Adjust the height of your navbar
    navOptions.style.visibility = 'hidden';
  }

  prevScrollPos = currentScrollPos;
};