// function takes a number and return an array of numbers that are odd from 0 to that number
//example printOddNumbers(6) => [1,3,5]
// printOddNumbers(13) => [1,3,5,7,9,11,13]

function oddNumbers(number) {
  const onlyOddNumbers = [];
  for (let i = 1; i <= number; i++) {
    console.log({ i });
    if (i % 2 > 0) {
      onlyOddNumbers.push(i);
    }
  }
  return onlyOddNumbers;
}

const oddNumbersIn75 = oddNumbers(75);
const oddNumbersIn100 = oddNumbers(100);
const oddNumbersIn150 = oddNumbers(150);

console.log({ oddNumbersIn75, oddNumbersIn100, oddNumbersIn150 });

const evenNumbers = function (number) {
  const onlyEvenMumbers = [];
  for (let i = 2; i <= number; i++) {
    if (i % 2 === 0) {
      onlyEvenMumbers.push(i);
    }
  }
  return onlyEvenMumbers;
};

const evenNumbersin50 = evenNumbers(50);
const evenNumbersin90 = evenNumbers(90);
const evenNumbersin120 = evenNumbers(120);

console.log({
  evenNumbersin50,
  evenNumbersin90,
  evenNumbersin120,
});

const arrayOfNumbers1 = [
  2, 9, 5, 3, 5, 25, 34, 89, 6, 5, 23, 52, 11, 4, 23, 990, 53, 76, 23, 9, 0, 12,
  77, 1, 34, 8, 51,
];

const arrayOfNumbers2 = [
  7, 23, 4, 22, 11, 89, 56, 43, 23, 55, 6, 82, 90, 11, 33, 80, 56, 9, 22, 27,
  93, 75, 18, 29, 24, 18, 39, 75, 81, 26,
];

const oddCollection = function (number) {
  const selectedOddNumbers = [];
  for (i = 0; i < number.length; i++) {
    if (i % 2 > 0) {
      selectedOddNumbers.push(i);
    }
  }
  return selectedOddNumbers;
};

const oddNumbs1 = oddCollection(arrayOfNumbers1);
const oddNumbs2 = oddCollection(arrayOfNumbers2);

function isPrimeNumber(aNumber) {
    for(let index =2; index < aNumber; index++){
        const isdivisible = aNumber % index === 0;
        if(isdivisible){
            return false;
        }
    }
    return true;
}

const check87 = isPrimeNumber(7);

console.log({ check87 });

const numberArray1 = [4, 11, 80, 23, 15, 38, 18, 31, 78, 92, 3, 77 ];
const numberArray2 = [9, 57, 99, 12, 75, 7, 611, 431, 53, 48, 13, 19, 34 ];

const primeNumDetector = function (theNumber){
    const primesSelected = [];
    for (let i = 0; i < theNumber.length; i++ ){
        for ( let pri = 2; pri < theNumber[i]; pri++){
            if (theNumber[i] % pri ===0 ){ 
                primesSelected.push(true)
            } else {
                primesSelected.push(false)
            }

        }

    }

    return primesSelected;
}




const firstPrimes = primeNumDetector(numberArray1);
// const secondPrimes = primeNumDetector(numberArray2);
 console.log(firstPrimes)