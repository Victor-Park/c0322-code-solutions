console.log('Lodash is loaded:', typeof _ !== 'undefined');

var player = [
  {
    name: 'vic',
    hand: ''
  },
  {
    name: 'tiny',
    hand: ''
  },
  {
    name: 'pano',
    hand: ''
  },
  {
    name: 'sac',
    hand: ''
  }
];

var suits = ['spades', 'diamonds', 'clubs', 'hearts'];
var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var points = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var deck = [];
var shuffledDeck = [];

function createDeck() {
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var card = { Rank: values[j], Suit: suits[i], Points: points[j] };
      deck.push(card);
    }
  }
  return deck;
}

function shuffle() {
  shuffledDeck = _.shuffle(deck);
  return shuffledDeck;
}

function deal() {
  for (var x = 0; x < player.length; x++) {
    var card1 = shuffledDeck.pop();
    var card2 = shuffledDeck.pop();
    player[x].hand = [card1, card2];
  }
  return player;
}

function winner() {
  var vic = player[0].hand[0].Points + player[0].hand[1].Points;
  var tiny = player[1].hand[0].Points + player[1].hand[1].Points;
  var pano = player[2].hand[0].Points + player[2].hand[1].Points;
  var sac = player[3].hand[0].Points + player[3].hand[1].Points;
  var pointsArr = [vic, tiny, pano, sac];
  var temp = 0;

  for (var a = 0; a < pointsArr.length; a++) {
    if (pointsArr[a] > temp) {
      temp = pointsArr[a];
    }
  }

  for (var b = 0; b < 4; b++) {
    if (temp === player[b].hand[0].Points + player[b].hand[1].Points) {
      var winner = player[b].name;
    }
  }
  return winner;
}

console.log(createDeck());
console.log(shuffle());
console.log(deal());
console.log(winner());
