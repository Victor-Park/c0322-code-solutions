var $span = document.querySelectorAll('span');

document.addEventListener('keydown', function keydown(event) {
  var $keypressed = event.key;
  for (var i = 0; i < $span.length; i++) {
    if ($keypressed === $span[i].textContent) {
      if ($span[i].className === 'next') {
        $span[i].className = 'correct';
        $span[++i].className = 'next';
      }
    } else {
      if ($span[i].className === 'next') {
        $span[i].className = 'wrong';
      } else {
        if ($span[i].className === 'wrong') {
          if ($keypressed === 'Backspace') {
            $span[i].className = 'next';
          }
        }
      }
    }
  }
});
