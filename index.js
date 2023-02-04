const numPrimos = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const maxArr = (arr) => {
  return Math.max(...arr);
};

const numPares = (arr1) => {
  return arr1.filter((a) => a % 2 === 0);
};

const sumNumPares = (arr1, arr2) => {
  let arr = [...arr1, ...arr2].filter((a) => a % 2 === 0);
  return arr.reduce((a, b) => a + b, 0);
};

const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = i * result;
  }
  return result;
};

const polindromo = (str) => {
  const rev = str.split("").reverse().join("");
  return rev === str;
};

const numSubString = (str, buscar) => {
  let result = 0;
  let post = str.indexOf(buscar);
  while (post !== -1) {
    result++;
    post = str.indexOf(buscar, post + 1);
  }
  return result;
};

module.exports = {
  numPares,
  numPrimos,
  maxArr,
  sumNumPares,
  factorial,
  polindromo,
  numSubString,
};
