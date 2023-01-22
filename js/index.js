const backToTheTop = document.getElementById('back-to-the-top');
const form = document.getElementById('form');
const textBelowForm = document.getElementById('text-below-form');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 700) {
    backToTheTop.style.display = 'flex';
  } else {
    backToTheTop.style.display = 'none';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  textBelowForm.style.display = 'block';
  form.reset();
  setTimeout(() => textBelowForm.style.display = 'none', 3000);
});

function setFooterText() {
  const date = new Date();
  footer.textContent = `Copyright © Daniel de Jesus | ${date.getFullYear()}`;
}

setFooterText();