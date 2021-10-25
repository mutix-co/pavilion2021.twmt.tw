var links = document.querySelector('.links');
var pagination = links.nextElementSibling;

links.addEventListener('scroll', function () {
  var scroll = links.scrollLeft;
  var itemWidth = links.children[0].getBoundingClientRect().width;

  const current = Math.round(scroll / itemWidth);
  pagination.dataset.active = current + 1;
});
