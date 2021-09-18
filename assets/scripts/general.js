var nav = document.querySelector('.nav');

window.onscroll = function () {
  nav.classList.toggle('active', window.scrollY > 0);
};
