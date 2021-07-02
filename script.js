const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link')
const mainDoc = document.getElementById('main-doc');
navBtn.addEventListener('click', () => {
  nav.classList.add('down');
});


navLinks.forEach(l => l.addEventListener('click', navHide));

mainDoc.addEventListener('click', navHide);

function navHide() {
  nav.classList.remove('down');
}
