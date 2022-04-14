
var images = document.querySelectorAll('img');
var dotcontainer = document.querySelector('div.dot');
var dot = document.querySelectorAll('.dot-padding');
var reverse = document.querySelector('.reverse');
var forward = document.querySelector('.forward');
var index = 0;
var returnID;

function interval() {
  images[index].className = 'picture-padding';
  dot[index].className = 'fa-solid fa-circle dot-padding';
  returnID = setInterval(nextPic, 3000);
}

function nextPic() {
  images[index].className = 'hidden';
  dot[index].className = 'fa-regular fa-circle dot-padding';
  index++;
  if (index === images.length) {
    index = 0;
  }
  images[index].className = 'picture-padding';
  dot[index].className = 'fa-solid fa-circle dot-padding';
}

document.addEventListener('DOMContentLoaded', interval);

dotcontainer.addEventListener('click', function (event) {
  if (event.target.matches('.dot-padding')) {
    for (var i = 0; i < dot.length; i++) {
      if (dot[i] === event.target) {
        dot[i].className = 'fa-solid fa-circle dot-padding';
        images[i].className = 'picture-padding';
        index = i;
      } else {
        dot[i].className = 'fa-regular fa-circle dot-padding';
        images[i].className = 'hidden';
      }
    }
  }
});

reverse.addEventListener('click', function (event) {
  images[index].className = 'hidden';
  dot[index].className = 'fa-regular fa-circle dot-padding';
  if (index !== 0) {
    --index;
  } else {
    index = 4;
  }
  clearInterval(returnID);
  interval();
});

forward.addEventListener('click', function () {
  images[index].className = 'hidden';
  dot[index].className = 'fa-regular fa-circle dot-padding';
  if (index !== 4) {
    ++index;
  } else {
    index = 0;
  }
  clearInterval(returnID);
  interval();
});
