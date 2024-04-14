const fs = require('fs');

const allFileContents = fs.readFileSync('./input.txt', 'utf-8');

const numParser = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

const getFirstAndLastDigit = (number) => {
  const numString = number.toString();
  const combined = parseInt(numString[0] + numString[numString.length - 1])
  
  return combined;
}

const replaceWordsWithNumbers = (string) => {
  for (let word in numParser) {
      string = string.replaceAll(word, numParser[word]);
  }
  
  return string;
}

const countSumOfOccurencies = (parseStringNums = false) => {
  let sumOfAll = 0;

  allFileContents.split(/\r?\n/).forEach(line =>  {
    let lineToParse = parseStringNums ? replaceWordsWithNumbers(line) : line;
    const number = lineToParse.replace(/\D/g,'');
    if(number < 9) {
      const duplicatedNumber = parseInt(number + number)
      sumOfAll = sumOfAll + duplicatedNumber;
    } else if (number > 99) {
      sumOfAll = sumOfAll + getFirstAndLastDigit(number);
    } else {
      sumOfAll = sumOfAll + parseInt(number);
    }
  });
  
  return sumOfAll;
}



console.log('(change function argument to false to not count string numbers.) Sum is: ', countSumOfOccurencies(false));