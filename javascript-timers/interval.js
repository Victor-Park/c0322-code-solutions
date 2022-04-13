var interval;

function countdown() {
  interval = setInterval(text, 1000);
}

function text() {
  var text = document.querySelector('h1');
  if (text.textContent === '4') {
    text.textContent = '3';
  } else if (text.textContent === '3') {
    text.textContent = '2';
  } else if (text.textContent === '2') {
    text.textContent = '1';
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
