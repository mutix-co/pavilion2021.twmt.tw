var nav = document.querySelector('.nav');

window.onscroll = function () {
  nav.classList.toggle('active', window.scrollY > 0);
};



document.addEventListener('click', function (e) {
  var button = e.target.closest('.tab');
  button.parentNode.dataset.active = button.dataset.active;
});



var modal = document.getElementById('speaker-modal');
document.addEventListener('click', function (e) {
  var speakerLi = e.target.closest('.speaker li');
  modal.dataset.active = speakerLi.dataset.active || "";
});
modal.addEventListener('click', function () {
  modal.dataset.active = "";
});



// timer
(function init() {
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes
    };
  }

  function initializeClock(endtime){
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      document.querySelector(".days > .value").innerText=t.days;
      document.querySelector(".hours > .value").innerText=t.hours;
      document.querySelector(".minutes > .value").innerText=t.minutes;

      if(t.total<=0){
        clearInterval(timeinterval);
        document.querySelector('.counter').remove();
      }
    }, 1000);
  }

  var target = new Date('2021-09-23T00:00:00.000Z');

  var t = getTimeRemaining(target);
  document.querySelector(".days > .value").innerText=t.days;
  document.querySelector(".hours > .value").innerText=t.hours;
  document.querySelector(".minutes > .value").innerText=t.minutes;

  initializeClock(target);
})()
