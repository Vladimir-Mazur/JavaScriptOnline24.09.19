//Пометка к работе: спасибо большое за то, что напомнили про операторы && и ||. Я все никак не мог вспомнить про них, поэтому везде просто дублировал. Теперь я это учел и в дальнейшем буду их использовать
//Функции высшего порядка. Задачи.
//Задача 1

let array1 = ["my", "name", "is", "Trinity"];
array2 = [10, 20, 30];
array3 = [{ age: 45, name: "Jhon" }, { age: 20, name: "Aaron" }];
array4 = ["abc", "123"];

function newValue(value, fn) {
  return fn(value);
}

function handler1(arr) {
  let result = "";
  for (const elem of arr) {
    result += elem;
  }
  return 'New value: ' + result;
}

function handler2(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 10);
  }
  return 'New value: ' + newArray;
}

function handler3(arr) {
  let result = "";
  arr.forEach(user => {
    result += user.name + " is " + user.age + ", ";
  });
  return 'New value: ' + result;
}

function handler4(arr) {
  let result = "";
  arr.forEach(elem => {
    result +=
      elem
        .split("")
        .reverse()
        .join("") + ", ";
  });
  return 'New value: ' + result;
}

console.log(newValue(array1, handler1));

//Задача 2
let myArray = [-30, -24, 0, 5, 7, 304]

function insteadOfEvery(arr, fn) {
  if (typeof arr.isArray === 'undefined') {
    if (typeof fn === 'function') {
      return fn(arr)
    } else {
      return 'there is not any array'
    }
  } else {
    return 'there is not any array'
  }
}

function moreThanFive(arr) {
  let result = arr.sort((a, b) => a - b);
  if (result[0] > 5) {
    result = true;
  } else {
    result = false;
  }
  return result
}

console.log(insteadOfEvery(myArray, moreThanFive));

//Перебирающие методы. Задачи.
//Задача 1
let arrayNumbers = [1, 2, 3, 5, 8, 9, 10];
result = [];
boolean = true;

for (const element of arrayNumbers) {
  if (element % 2 === 1) {
    boolean = true;
    result.push({
      digit: element,
      odd: boolean
    });
  } else {
    boolean = false;
    result.push({
      digit: element,
      odd: boolean
    });
  }
}
// попводу 0. Я почитал не мало литературы и уточнил, что правило четности не властно за пределами целых чисел, поэтому данная запись не является ошибкой

console.log(result);

//Задача 2
let withNullArray = [12, 4, 50, 1, 0, 18, 40];
    withNullResult = true;
if (withNullArray.some((number) => {
  return number === 0
})) {
  withNullResult = false;
} else {
  withNullResult = true;
}

console.log(withNullResult);

//Задача 3
let worldArray = ['yes', 'hello', 'no', 'easycode', 'what'];
    moreThanThree = true;

if (worldArray.some((elem) => {
  return elem.length > 3
})) {
  moreThanThree = true;
} else {
  moreThanThree = false;
}

console.log(moreThanThree);

//Задача 4
let proposition = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

function getProposition(arr) {
  let readyProposition = '';
  let resultArray = arr.sort((a, b) => {
    return a.index - b.index;
  });
  for (let elem of arr) {
    readyProposition += elem.char;
  }
  return readyProposition
}

console.log(getProposition(proposition));
//если что, в данном контексте proposition переводится как предложение, и если я не правильно перевел - не бейте

//Метод Sort. Задачи.
//Задача 1
let someArray = [  [14, 45],  [1],  ['a', 'c', 'd']  ]

let readyArray = someArray.sort((a, b) => {return a.length - b.length});

console.log(readyArray);

//Задача 2
let infoArray = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
]

let newInfoArray = infoArray.sort((a, b) => {return a.info.cores - b.info.cores});

console.log(newInfoArray);

//Задача 3
let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arr) {
  let newArr = [];
  newArr = arr.filter((array) => array.price >= 15 && array.price <= 30);
  newArr.sort((a, b) => a.price - b.price);
  return newArr;
}

console.log(filterCollection(products))