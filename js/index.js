const backToTheTop = document.getElementById('back-to-the-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 700) {
    backToTheTop.style.display = 'flex';
  } else {
    backToTheTop.style.display = 'none';
  }
});