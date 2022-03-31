var $tabcontainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabcontainer.addEventListener('click', function click(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab ' + 'active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var $dataview = event.target.getAttribute('data-view');
  for (var a = 0; a < $view.length; a++) {
    if ($view[a].getAttribute('data-view') === $dataview) {
      $view[a].className = 'view';
    } else {
      $view[a].className = 'view hidden';
    }
  }
});
