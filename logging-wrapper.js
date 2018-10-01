var wrapLog = function (callback, name) {

  return function() {
    //var betterArguments = [].slice.apply(arguments);
    var cb = callback.apply(null, arguments);
    var args = ""

    for (var elem in arguments) {
      args += elem += ', '
    }

    console.log(name + '(' + args.slice(0, -2) + ') => ' + cb);

    return cb;
  }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

var a1 = logArea(5, 3); // area(5, 3) => 15
var a2 = logArea(3, 2); // area(3, 2) => 6
console.log(a1);  // 15


var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24