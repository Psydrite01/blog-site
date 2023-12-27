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