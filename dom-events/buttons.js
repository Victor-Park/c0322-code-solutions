function handleClick(event) {
  console.log('button clicked', 'button clicked!');
  console.log('event', event);
  console.log('target', event.target);
}
var $buttonclick = document.querySelector('.click-button');
$buttonclick.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered', 'button hovered!');
  console.log('event', event);
  console.log('target', event.target);
}
var $hoverbutton = document.querySelector('.hover-button');
$hoverbutton.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('double clicked', 'button double clicked!');
  console.log('event', event);
  console.log('target', event.target);
}
var $doubleclick = document.querySelector('.double-click-button');
$doubleclick.addEventListener('dblclick', handleDoubleClick, false);
