/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  var isUnderFive;
  if (number < 5) {
    isUnderFive = true;
  } else {
    isUnderFive = false;
  }
  return isUnderFive;
}

function isEven(number) {
  var isEven;
  if ((number % 2) === 0) {
    isEven = true;
  } else {
    isEven = false;
  }
  return isEven;
}

function startsWithJ(string) {
  var startsWithJ;
  if (string[0] === 'J') {
    startsWithJ = true;
  } else {
    startsWithJ = false;
  }
  return startsWithJ;
}

function isOldEnoughToDrink(person) {
  var isOldEnough;
  if (person.age <= 21) {
    isOldEnough = false;
  } else {
    isOldEnough = true;
  }
  return isOldEnough;
}

function isOldEnoughToDrive(person) {
  var isOldEnough;
  if (person.age <= 16) {
    isOldEnough = false;
  } else {
    isOldEnough = true;
  }
  return isOldEnough;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH < 14 && pH >= 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
