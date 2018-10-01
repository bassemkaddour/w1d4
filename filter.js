var list = [1, 2, 3, 4, 5];

function myFilter(list, cb) {
  var filteredArray = [];
  for (var i = 0; i < list.length; i++) {
    if(cb(list[i], i, list)) {
      filteredArray.push(list[i]);
    }
  }
  return filteredArray;
}

var filteredResult = myFilter(list, function(num) {
  return num > 3;
});

console.log(filteredResult);