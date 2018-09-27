function multiplier(factor) {
  console.log("in multiplier");
  //return number => number * factor;
  function doit(number) {
    return number * factor;
  }
  function changeFactor(newFactor) {
    factor = newFactor;
  }
  return {
    doit: doit,
    changeFactor: changeFactor
  };
}

let m2 = multiplier(2);
console.log(m2.doit(7));  // 14
m2.changeFactor(3);
console.log(m2.doit(7));  // 21


