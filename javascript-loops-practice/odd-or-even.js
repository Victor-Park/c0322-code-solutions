/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  var even = 'even';
  var odd = 'odd';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push(even);
    } else {
      newArray.push(odd);
    }
  } return newArray;
}
