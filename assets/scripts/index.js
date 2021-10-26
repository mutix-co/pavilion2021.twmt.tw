var links = document.querySelector('.links');
var pagination = links.nextElementSibling;

links.addEventListener('wheel', function(event) {
  if (!event.deltaY) return;

  // check: 是否已到底
  var containerWidth = links.clientWidth;
  var contentWidth = links.scrollWidth;
  var maxScroll = contentWidth - containerWidth;

  var delta = event.deltaY + event.deltaX;

  if (links.scrollLeft >= maxScroll && delta > 0) return;
  if (!links.scrollLeft && delta < 0) return;

  links.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
});

links.addEventListener('scroll', function() {
  var scroll = links.scrollLeft;
  var itemWidth = links.children[0].getBoundingClientRect().width;

  const current = Math.round(scroll / itemWidth);
  pagination.dataset.active = current + 1;
});

pagination.addEventListener('click', function(event) {
  var li = event.target.closest('li');
  if (!li) return;

  var itemWidth = links.children[0].getBoundingClientRect().width;
  var current = parseInt(li.dataset.active, 10) - 1;
  links.scrollTo(current * itemWidth, 0);
});
