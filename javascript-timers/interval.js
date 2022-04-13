var interval;

function countdown() {
  interval = setInterval(text, 1000);
}

function text() {
  var text = document.querySelector('h1');
  if (text.textContent !== '1') {
    var count = parseInt(text.textContent);
    --count;
    text.textContent = String(count);
  } else {
    text.textContent = '~Earth Beeeelooowww Us~';
    clear();
  }
}

function clear() {
  clearInterval(interval);
  interval = null;
}

document.addEventListener('DOMContentLoaded', countdown);
