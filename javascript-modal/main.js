// get class .modal and assign it to var modal
// get element button and assign it to var button
// create function to open modal when button is clicked
// create NO button within modal to close modal when clicked

var modal = document.querySelector('.modal');
var button = document.querySelector('button');
var close = document.querySelector('.close');

button.addEventListener('click', function click() {
  modal.className = 'modal on';
}
);

close.addEventListener('click', function click() {
  modal.className = 'modal off';
}
);
