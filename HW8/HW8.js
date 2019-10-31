// Замыкания. Задачи.
// Задача 1
function minus(minuend) {
   if (minuend === undefined) {
      minuend = 0;
   }
   return function (subtrahend) {
      if (subtrahend === undefined) {
         subtrahend = 0;
      }
      return minuend - subtrahend
   }
}

console.log(minus(10)(6))
console.log(minus(5)(6))
console.log(minus(10)())
console.log(minus()(6))
console.log(minus()())

// Задача 2
function multiplyMaker(multiplier1) {
 
   let multiplier2 = multiplier1;

   return function multiply(multiplier1) { 
      return multiplier2 *= multiplier1 
   };
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// Задача 3
const modelString = (function (){
   let string = '';

   function setString(value) {string = value + ''}

   function getString() {return string}

   function getStringLength() {return string.length}

   function getInversionString() {return string.split('').reverse().join('')}
   
   return {
      setString: setString,
      getString: getString,
      getStringLength: getStringLength,
      getInversionString: getInversionString
   }
}())
modelString.setString('abcde')
console.log(modelString.getString())
console.log(modelString.getStringLength())
console.log(modelString.getInversionString())

// Задача 4
const calculator = (function (){
   let value = 0;

   function getValue() {
      value = Math.round(value * 100) / 100;
      console.log(value)
      return this;
   }

   function setValue(num) {
      if (typeof num === 'number') {
        value = num
        return this
      } else {
         console.log('Not correct value')
      }
   }

   function append(num) {
      value += num
      return this
   }

   function diminution(num) {
      value -= num
      return this
   }

   function multiply(num) {
      value *= num
      return this
   }
   
   function dividing (num) {
      value /= num
      return this
   }

   function rasingToThePower(num) {
      value = Math.pow(value, num)
      return this
   }

   return {
      setValue: setValue,
      getValue: getValue,
      append: append,
      diminution: diminution,
      multiply: multiply,
      dividing: dividing,
      rasingToThePower: rasingToThePower
   }
}())

calculator.setValue(10).rasingToThePower(2).getValue()