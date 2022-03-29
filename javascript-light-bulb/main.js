// assign return of querySelector method of document object with 1 argument, 'bulb', to new variable bulb
// create addEventListener method of bulb object that listens for 'click', and calls new functino click with button parameter
// assign null to new variable onoff
// if the button class is 'off'
// turn it on
// else (button is already on), turn it off

var container = document.querySelector('.container');
var bulb = document.querySelector('.bulb');
bulb.addEventListener('click', function click(button) {
  var onoff;
  if (bulb.className === 'bulb off') {
    onoff = 'on';
  } else {
    onoff = 'off';
  }
  bulb.className = 'bulb ' + onoff;
  container.className = 'container ' + onoff;
}
);
