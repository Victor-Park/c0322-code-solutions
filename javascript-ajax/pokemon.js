function getPokemonData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.response);
    console.log(xhr.status);
  });
  xhr.send();
}

getPokemonData('cubone');
