var topbar = document.querySelector('.topbar');

topbar.addEventListener('click', function (event) {
  var status = topbar.dataset.active || '';
  var current = event.target.dataset.active;

  if (!current || event.target === topbar) return;

  const largeScreen = window.innerWidth >= 1280;
  if (largeScreen) {
    topbar.dataset.active = status ? '' : '-';
    return;
  }

  var statusWithoutCurrent = status.replace(current, '');
  var currentShown = statusWithoutCurrent !== status;
  topbar.dataset.active = currentShown ? statusWithoutCurrent : (statusWithoutCurrent + current);
});
