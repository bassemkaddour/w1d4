var words = ["ground", "control", "to", "major", "tom"];


function map(words, cb) {
  mappedArray = [];
  for (var i = 0; i < words.length; i++) {
    mappedArray.push(cb(words[i]))
  }
  return mappedArray;
}

console.log(
map(words, function(word) {
  return word.length;
}),

map(words, function(word) {
  return word.toUpperCase();
}),

map(words, function(word) {
  return word.split('').reverse().join('');
})
);

