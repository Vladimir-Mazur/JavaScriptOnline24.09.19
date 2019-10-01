let string = "some test string";

//Строки. Задачи.
//Задание 1

let value = string[0];
let value2 = string[string.length - 1];

console.log(value, value2);

//Задание 2
let firstLetter = value.toUpperCase();
let lastLetter = value2.toUpperCase();

let newString = string.slice(1, string.length - 1);
newString = firstLetter + newString + lastLetter;

console.log(newString);

//Задание 3
let string2 = string.indexOf("string");

console.log(string2);

//Задание 4
let space = string.indexOf(" ", 6);

console.log(space);

//Задание 5
let stringSubstr = string.substr(5, 4);

console.log(stringSubstr);

//Задание 6
let stringSlice = string.slice(5, 9);

console.log(stringSlice);

//Задание 7
let stringSlice2 = string.slice(0, string.length - 6);

console.log(stringSlice2);

//Задание 8
let a = 20;
b = 16;
a = a.toString();
b = b.toString();

let ab = +(a + b);

console.log(ab);

//Числа. Задачи.
//Задание 1
let p = Math.PI;
p = +p.toFixed(2);

console.log(p);

//Задание 2
let numbers = [15, 11, 16, 12, 51, 12, 13, 51];
minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(minNum, maxNum);

//Задание 3a
let number = +Math.random().toFixed(2);
console.log(number);

//Задание 3b
let x = Math.random().toFixed(1) * 10;
y = Math.floor(Math.random() * (x + 1));
console.log(y);

//Задание 4
let mathResult = 0.6 + 0.7;
normResult = +mathResult.toFixed(1);
console.log(mathResult, normResult);

//Задание 5
let money = "100$";
numberOfMoney = parseFloat(money);
console.log(numberOfMoney);

//Преобразование примитивов. Задачи.

let num1 = 0 || "string";

console.log(num1); // логические операторы такие как || и && производят булевое преобразование под капотом,
//но при этом всегда возвращают оригинальное значение операндов, даже если они не являются булевыми. следовательно,
//аналогичное произойдет при &&.

let num2 = null || 25;

console.log(num2); // т.к. null считается за 0, а это false в булевом понятии, а 25 это true. Оператор || всегда склоняется
//к true, поэтому он выводит 25. При && произойдет обратное и он выведет null.

let num3 = null && 0 && 35;

console.log(num3); // объяснялось ранее.

let num4 = +(12 + 14 + "12");

console.log(num4); // между 12 и 14 происходить математическая операция, т.к. она имеет наибольший приоритет и
//стоит в начале. Затем к полученному значению приписывается 12, т.к. это строка и выполняется строковая операция.
//Причем 26 превращается в строку.

let num5 = 3 + 2 - "1";

console.log(num5); // в данном случае строка 1 преобразуется в число и происходят обычные арифметические операции.
//т.к. строковых операций со знаком "-" не бывает.

let num6 = "3" + 2 - 1;

console.log(num6); // обяснялось в примере с переменной f.

let num7 = true + 2;

console.log(num7); // в булевом понятии true равносильно 1. А далее 1 и 2 складываются.

let num8 = +"10" + 1;

console.log(num8); // ставя перед строкой знак +, в случае если ее можно преобразовать в число, она и преобразовывается,
//а дальше происходит арифметическая операция.

let num9 = undefined + 2;

console.log(num9); // undefined нельзя преобразовать в число, а следовательно и выполнять арифметические
//операции с получением числа, поэтому мы и получаем NaN.

let num10 = null + 5;
console.log(num10); // null = 0, а дальше выполняется арифметическая операция.

let num11 = true + undefined;
console.log(num11); // аналогично с примером, в котором была переменная l.

//If else. Задачи.
//Задача 1
let overflow = "hidden";

if (overflow === "hidden") {
  overflow = "visible";
} else {
  overflow = "hidden";
}

console.log(overflow);

//Задача 2
x = 8;

if (x == 0) {
  x = 1;
} else if (x < 0) {
  x = "less then zero";
} else if (x > 0) {
  x = x * 10;
}

console.log(x);

//Задача 3
let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  console.log("Need Repair");
  needRepair = true;
} else {
  needRepair = false;
}

//Задача 4
let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

if (item.discount !== undefined) {
  priceWithDiscount =
    (parseFloat(item.price) * parseFloat(item.discount)) / 100;
  console.log(priceWithDiscount);
} else {
  console.log(price);
}

//Задача 5

let product = {
  name: "Яблоко",
  price: "10$"
};

let min = 10;
let max = 20;

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("товаров не найдено");
}
