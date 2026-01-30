const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((tt, num) => tt + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod * num, 1);
};

const power = function(base, ex) {
	let res = 1;
  for (let i = 0; i < ex; i++) {
    res *= base
  }
  return res;
};

const factorial = function(a) {
	let res = 1;
  for (let k = a; k >= 2; k--) {
    res *= k;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
