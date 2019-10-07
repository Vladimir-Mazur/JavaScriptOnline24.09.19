//Функции. Задачи.
// задача 1

let result = 1;
result2 = "(";
argument = "";

function multiply() {
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      result = result * arguments[i];
      if (i !== 0) {
        argument += "," + arguments[i];
      } else {
        argument += arguments[i];
      }
      if (i !== 0) {
        result2 += "*" + arguments[i];
      } else {
        result2 += arguments[i];
      }
    }
    return (
      "multiply" +
      "(" +
      argument +
      ")" +
      " " +
      "=" +
      " " +
      result +
      result2 +
      ")"
    );
  } else {
    result = 0;
    return result;
  }
}

console.log(multiply(1, 2, 3));

// задача 2
let newString = "";

function getString(test) {
  for (let i = test.length - 1; i >= 0; i--) {
    newString += test[i];
  }
  return (
    "reverseString" +
    "('" +
    test +
    "')" +
    " " +
    "//" +
    " " +
    "'" +
    newString +
    "'"
  );
}

console.log(getString("test"));

// задача 3
let unicodLetters = "";

function unicodString(string) {
  for (let i = 0; i < string.length; i++) {
    if (i !== 0) {
      unicodLetters += " " + string[i].charCodeAt();
    } else {
      unicodLetters += string[i].charCodeAt();
    }
  }
  return (
    "getCodeStringFromText" +
    "('" +
    string +
    "')" +
    " " +
    "//" +
    " " +
    "'" +
    unicodLetters +
    "'"
  );
}

console.log(unicodString("hello"));

// задача 4
let answer = "";

function matchNumber(number, randomNumber) {
  if (number <= 10) {
    if (number >= 0) {
      randomNumber = Math.random().toFixed(1) * 10;
      if (number === randomNumber) {
        answer = "Вы выиграли";
      } else {
        answer =
          "Вы не угадали ваше число " +
          number +
          " а выпало число " +
          randomNumber;
      }
    } else {
      answer = "число должно быть от 1 до 10";
    }
  } else {
    answer = "число должно быть от 1 до 10";
  }
  return answer;
}

console.log(matchNumber(5));

// задача 5
let nArray = [];

function getArray(n) {
  for (let i = 1; i <= n; i++) {
    nArray.push(i);
  }
  return "getArray" + "(" + n + ")" + " " + "//" + " " + "[" + nArray + "]";
}

console.log(getArray(10));

// задача 6
let secondArray = [];

function doubleArray(firstArray) {
  for (let i = 0; i < firstArray.length; i++) {
    secondArray.push(firstArray[i]);
  }
  for (let i = 0; i < firstArray.length; i++) {
    secondArray.push(firstArray[i]);
  }
  return (
    "doubleArray" +
    "(" +
    firstArray +
    ")" +
    " " +
    "//" +
    " " +
    "[" +
    secondArray +
    "]"
  );
}

console.log(doubleArray([1, 2, 3]));

// задача 7
let withoutFirstArray = [];
let arrays = [];

function changeCollection() {
  for (let i = 0; i < arguments.length; i++) {
    let length = arguments[i];
    arrays += " [" + arguments[i] + "] ";
    if (i !== 0) {
      withoutFirstArray += " [" + length.slice(1, length.length) + "]";
    } else {
      withoutFirstArray += "[" + length.slice(1, length.length) + "]";
    }
  }
  return (
    "changeCollection" +
    "[" +
    arrays +
    "]" +
    " " +
    "--->" +
    " " +
    "[" +
    withoutFirstArray +
    "]"
  );
}

console.log(changeCollection([1, 2, 3], [1, 3, 5], [1, 4, 7, 5, 6]));

// задача 8
frontendDeveloper = {
  name: "Denis",
  age: "29",
  gender: "male"
};

backendDeveloper = {
  name: "Ivan",
  age: "20",
  gender: "male"
};

let user = [];

function funcGetUsers() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].gender === "male") {
      user.push(arguments[i]);
    } else {
      user.push("It is not a male");
    }
  }
  return user;
}
console.log(funcGetUsers(frontendDeveloper, backendDeveloper));

// Задача 1
let array = [-2, 3, 4, -5, -6, 2, 4, -56];
positiveArray = [];
negativeArray = [];

function positiveNegative() {
  for (let i = 0; i < array.length; i++) {
    array[i] > 0
      ? positiveArray.push(array[i])
      : array[i] < 0
      ? negativeArray.push(array[i])
      : null;
  }

  return positiveArray.length + " " + negativeArray.length;
}

console.log(positiveNegative(positiveArray, negativeArray));

//Задача 2
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

console.log(result);
