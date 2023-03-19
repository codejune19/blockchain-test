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

  return timeDetails
}

const currentNigerianTime = customTime(new Date());

console.log({ currentNigerianTime });


function tempConverter ( number, unit ) {
    const calcCelsius = (5*number - 160)/9
    const calcFahren = (9*number + 160)/5
    const twoDeciPlaces = calcCelsius.toFixed(2);
    if (unit === 'c') {
        return twoDeciPlaces + 'F'
    }
    else {
        return calcFahren + 'º'+'C'
    }
}

const todaysTemp = tempConverter(80, 'c')
const tomorrowsTemp = tempConverter(200, 'f')

console.log({todaysTemp, tomorrowsTemp})


const day = new Date().getDay()
console.log({day});


function numbers (a, b) {
    return a == 50 || a + b == 50 || b === 50 ? true : false 
}
    


const numberPair1 = numbers(50, 20);
const numberPair2 = numbers(15, 30);
const numberPair3 = numbers(30, 50);
const numberPair4 = numbers(0, 50);
const numberPair5 = numbers(72, 3)

console.log({numberPair1, numberPair2, numberPair3, numberPair4, numberPair5});



