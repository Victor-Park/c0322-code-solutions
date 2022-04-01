var $span = document.querySelectorAll('span');
var index = 0;
document.addEventListener('keydown', function keydown(event) {
  var $keypressed = event.key;
  if ($keypressed === $span[index].textContent) {
    $span[index].className = 'correct';
    $span[++index].className = 'next';
  } else {
    $span[index].className = 'wrong';
    if ($keypressed === 'Backspace') {
      $span[index].className = 'next';
    }
  }
})
;
