//Объекты. Задачи.

let phone = {};

phone.product = "iphone";
phone.price = "1000";
phone.currency = "dollar";
phone.details = {};
phone.details.model;
phone.details.color;

console.log(phone);

//Тернарный оператор. Switch case. Задачи.
//Задача 1
let a = "block";

switch (a) {
  case "block":
    console.log("block");
    break;
  case "none":
    console.log("none");
    break;
  case "inline":
    console.log("inline");
    break;
  default:
    console.log("other");
    break;
}

//Задача 2.1
let overflow = "hidden";

overflow = overflow === "hidden" ? "visible" : "hidden";

console.log(overflow);

//Задача 2.2
let x = 0;

x = x === 0 ? 1 : x < 0 ? "less then zero" : x * 10;

console.log(x);

//Задача 2.3
let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};

car.age > 5 ? (needRepair = true) : (needRepair = false);
car.age > 5 ? console.log("Need Repair") : (needRepair = false);

//Циклы. Задачи.
//Задача 1
let easycode = "i am in the easycode";
newEasycode = easycode[0].toUpperCase();

for (let i = 0; i < easycode.length - 1; i++) {
  if (easycode[i] === " ") {
    newEasycode += easycode[i + 1].toUpperCase();
  } else {
    newEasycode += easycode[i + 1];
  }
}

console.log(newEasycode);

//Задача 2
let invertString = "tseb eht ma i";
newInvertString = "";

for (let i = invertString.length - 1; i >= 0; i--) {
  newInvertString += invertString[i];
}

console.log(newInvertString);

//Задача 3
let factorial = 10;
newFactorial = 1;

for (let i = 1; i <= factorial; i++) {
  newFactorial = newFactorial * i;
}

console.log(newFactorial);

//Задача 4
let string = "JavaScript is a pretty good language";
newString = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] !== " ") {
    newString += string[i].toUpperCase();
  }
}

console.log(newString);

//Задача 5
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of numArray) {
  if (value % 2 === 1) {
    console.log(value);
  }
}

//Задача 6
let list = {
  name: "denis",
  work: "easycode",
  age: 29
};

for (let key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);
