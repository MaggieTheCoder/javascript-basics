const getNthElement = (index, array) => 
{ if (index > array.length - 1) {
    return array[index - array.length];
}
  return array[index]// your code here
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');  // your code here
};

const addToArray = (element, array) => {
  array.push(element);// your code here
};

const addToArray2 = (element, array) => {
  return array.concat(element);
    // your code here
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
   // your code here
};

const numbersToStrings = numbers => {
  return numbers.map(String); // your code here
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());

 // your code here
};

const reverseWordsInArray = strings => {
  return strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
  }; // your code here

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
