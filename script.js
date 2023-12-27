document.addEventListener('DOMContentLoaded', function () {
  const navButton = document.getElementById('dropdown');
  const navOptions = document.querySelector('.hiddennavbar');

  navButton.addEventListener('click', function () {
    if (navOptions.style.display === 'none' || navOptions.style.display === '') {
      navOptions.style.display = 'block';
    } else {
      navOptions.style.display = 'none';
    }
  });
});