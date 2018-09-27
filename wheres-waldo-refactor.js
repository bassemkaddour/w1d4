// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(x, index, arr) {
    if (x === "Waldo") {
      found(x, index, arr);   // execute callback
    }
  });
}

function actionWhenFound(x, index, data) {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);