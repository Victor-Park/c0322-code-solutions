var interval;

function countdown() {
  interval = setInterval(text, 1000);
}

// if text.textContent = '1'
// then change it to '~earth below us~'
// else text.textContent

function text() {
  var text = document.querySelector('h1');
  if (text.textContent !== '1') {
    var count = parseInt(text.textContent);
    --count;
    text.textContent = String(count);
  } else if (text.textContent === '1') {
    text.textContent = '~Earth Beeeelooowww Us~';
  } else {
    clear();
  }
}

function clear() {
  clearInterval(interval);
  interval = null;
}

document.addEventListener('DOMContentLoaded', countdown);
