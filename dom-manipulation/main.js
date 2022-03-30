var $buttonclicks = 0;
var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

$hotbutton.addEventListener('click', function click() {
  $clickcount.textContent = 'Clicks: ' + $buttonclicks++;
  var temperature = null;
  if ($buttonclicks < 4) {
    temperature = 'cold';
  } else if ($buttonclicks < 7) {
    temperature = 'cool';
  } else if ($buttonclicks < 10) {
    temperature = 'tepid';
  } else if ($buttonclicks < 13) {
    temperature = 'warm';
  } else if ($buttonclicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotbutton.className = 'hot-button ' + temperature;
});
