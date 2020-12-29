// let gas = [20, 49, 10, 30];
// let food = [10, 40, 50];
// function calculateTotal(arr) {
//   let total = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// let gasTotal = calculateTotal(gas);
// let foodTotal = calculateTotal(food);
// let randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

////////////////////////////////////////////////////////

// function morning(name) {
//   return `good morning ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
//   let myName = "Vladyslav";
//   return `${cb(name)}, my name is ${myName}`;
// }

// console.log(greet("artem", morning));
///////////////////////////////////////////////////////////////////

// let people = [
//   { naeme: "peter", age: 20, position: "devs" },
//   { naeme: "denis", age: 26, position: "designer" },
//   { naeme: "andry", age: 28, position: "promoter" },
// ];

// function showPerson(person) {
//   console.log(person);
// }

// people.forEach(showPerson);
// ///////////////////////////////////

// people.forEach(function (item){
//     console.log(item.position.toUpperCase());
// })
///////////////////////////////////////////////////////////////////////////////
// let people = [
//     { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200},
//     { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300},
//     { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500},
//     { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500},
// ];

// let total = people.reduce(function (acc, currentItem) {
//     console.log(`total ${acc}`);
//     console.log(`current money : ${currentItem.salary}`);
//     acc += currentItem.salary;
//     return acc;
// }, 0);

// console.log(total);

////////////////////////////////////////////////////////////////////////////////////

// let number = 4.56789;
// let result = Math.floor(8.9999);


// let number = 89;
// let result = Math.sqrt(number);
// console.log(result);

//////////////////////////////////////////////////////////////////

// let result = Math.PI;
// console.log(result);
///////////////////////////////////////////

// let result = Math.min(4, 5, 6, 7, 8, 9, -2);
// console.log(result);

let months = [
    'jenuary',
    'february',
    'march',
    'april',
    'may',
    'jun',
    'july',
    'august',
    'sepromber',
    'october',
    'november',
    'december'
];

let days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

//let date = new Date();
let date = new Date("11/30/1994");
console.log(date);

let month = date.getMonth();
console.log(months[month]);

let day = date.getDay();
console.log(days[day]);

console.log(date.getFullYear());

let sentence = `${date.getDate()} ${months[month]} ${days[day]}  ${date.getFullYear()} year`
console.log(sentence);

document.body.innerHTML = sentence;