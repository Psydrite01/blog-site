document.addEventListener('DOMContentLoaded', function () {
  const navButton = document.getElementById('dropdown');
  const navOptions = document.getElementsByClassName('hiddennavbar');

  navButton.addEventListener('click', function () {
    if (navOptions.style.visibility === 'hidden') {
      navOptions.style.visibility = 'visible';
    } else {
      navOptions.style.display = 'hidden';
    }
  });
});