const { nums, words } = require("./data/data.js");


const isEveryNumGreaterThan2 = (num) => {
      return nums.every((num) => num > 2);
};



const isEveryWordShorterThan7 = (word) => {
  return words.every((word) => word.length < 7);
};



// Filter

const arrayLessThan5 = () => {
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find((word) => word.length > 4);
};

// For Each

const logValuesTimes3 = () => {
  let arr = [];
  nums.forEach((num) => {
    if(num){
      arr.push(num * 3)
    }
  })
  console.log(arr)
};

const logWordsWithExclamation = () => {
  let arr = [];
  words.forEach((word) => {
    if(word){
      arr.push(`${word}!`)
    }
  })
  console.log(arr);
};

// Map

const arrayValuesTimes100TimesIndex = (num) => {
  return nums.map((num, index) => num * num * index);
};

const arrayWordsUpcased = (word) => {
  return words.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (num) => {
  return nums.some((num) => num / 7);
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.includes("a"))
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
