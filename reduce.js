var list = [1, 2, 3, 4, 5];

function myReducer(list, cb, initial) {
  var accumulator = 0;
  for (var i = 0; i < list.length; i++) {
    accumulator = cb(accumulator, list[i], i, list, initial);
  }
  return accumulator;
}

function reducer(accumulator, currentValue, currentIndex, data, initialValue) {
  if (initialValue && currentIndex === 0) {
    accumulator = initialValue;
  }
  return accumulator + currentValue;
}

var result1 = myReducer(list, reducer);
var result2 = myReducer(list, reducer, 10);
console.log(result1);
console.log(result2);