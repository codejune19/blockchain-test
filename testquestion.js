// const myDate = new Date();
// get the day, month and year and print it in a format (today is saturday, 18th of march, 2023 )

// console.log(
//   `Today is ${day}, ${date}th of ${month}, ${year} and the current time is ${theHour}:${minutes}:${seconds}.`
// );

function customTime(date) {
  const dayList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const monthList = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = dayList[date.getDay() - 1];
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();
  const theDate = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  if (hours > 12) {
    const actualHour = hours - 12;
    hours = actualHour + "PM";
  } else {
    hours = hours + "AM";
  }

  //   const theHour = twelveHours();
  const timeDetails = `Today is ${day}, ${theDate}th of ${month}, ${year} and the current time is ${hours}:${minutes}:${seconds}.`;

  return timeDetails;
}

const currentNigerianTime = customTime(new Date());

console.log({ currentNigerianTime });

function tempConverter(number, unit) {
  const calcCelsius = (5 * number - 160) / 9;
  const calcFahren = (9 * number + 160) / 5;
  const twoDeciPlaces = calcCelsius.toFixed(2);
  if (unit === "c") {
    return twoDeciPlaces + "F";
  } else {
    return calcFahren + "º" + "C";
  }
}

const todaysTemp = tempConverter(80, "c");
const tomorrowsTemp = tempConverter(200, "f");

console.log({ todaysTemp, tomorrowsTemp });

const day = new Date().getDay();
console.log({ day });

function numbers(a, b) {
  return a == 50 || a + b == 50 || b === 50 ? true : false;
}

const numberPair1 = numbers(50, 20);
const numberPair2 = numbers(15, 30);
const numberPair3 = numbers(30, 50);
const numberPair4 = numbers(0, 50);
const numberPair5 = numbers(72, 3);

console.log({
  numberPair1,
  numberPair2,
  numberPair3,
  numberPair4,
  numberPair5,
});

// function palindrome(word){
//     for(let i = 0; i < word.length; i++){
//         const forward = word[i]
//     }
//     for ( let b = word.length - 1; b = 0; b--){
//         const backward = word[b]
//     }

//     if(forward === backward) {
//         return true
//     } else {
//         return false
//     }

// }

// const palin = palindrome(noon)

function palindrome(word) {
  let backwardText = "";
  for (let i = word.length - 1; i >= 0; i--) {
    backwardText = backwardText + word[i]
  }
  return word === backwardText
}

const word1 = palindrome("noon");
const word2 = palindrome("sapphire");
const word3 = palindrome("peep");
const word4 = palindrome("NAN");

console.log({ word1, word2, word3, word4 });


// Area of a triangle
function areaOfTriangle (a, b){
  const formula = (1/2 * a) * b
  return formula
}

triangle1 = areaOfTriangle(8, 9)
triangle2 = areaOfTriangle(24, 6)
triangle3 = areaOfTriangle(16, 10)
triangle4 = areaOfTriangle(2, 5)

console.log({triangle1, triangle2, triangle3, triangle4})

//multiples

function number(num) {
  if ( num % 3 == 0 || num % 7 == 0){
    return true
  } else {
    return false
  }
}

const number1 = number(21);
const number2 = number(61);
const number3 = number(54);
const number4 = number(35);
const number5 =number(20)
console.log({number1, number2, number3, number4, number5})

// A function that calculates the difference between two numbers

function intergars(a, b){
  b = 13
  const difference = a - 13
  return a > b? difference * 2: difference
};

const numberSet1 = intergars(12, 13);
const numberSet2 = intergars(34, 13);
const numberSet3 = intergars(13, 13);
const numberSet4 = intergars(40, 13);
const numberSet5 = intergars(23, 13);

console.log({numberSet1, numberSet2, numberSet3,numberSet4, numberSet5});