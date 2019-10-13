//This. Задачи.
//Задачa 1
const rectangle = {
   width: 100,
   height: 50,
   getSquare: function() {
     return this.width * this.height;
   }
 };
 
 console.log(rectangle.getSquare());
 
 //Задача 2
 const price = {
   price: 10,
   discount: "15%",
   getPrice: function() {
     return this.price;
   },
   getPriceWithDiscount: function() {
     return this.price * (1 - parseInt(this.discount) / 100);
   }
 };
 
 console.log(price.getPrice());
 console.log(price.getPriceWithDiscount());
 
 //Задача 3
 const object = {
   height: 10,
   newHeight: function() {
     return this.height + 1;
   }
 };
 
 console.log(object.height);
 console.log(object.newHeight());
 
 //Задача 4
 const numerator = {
   value: 1,
   double() {
     this.value *= 2;
     return this;
   },
   plusOne() {
     this.value++;
     return this;
   },
   minusOne() {
     this.value--;
     return this;
   }
 };
 
 console.log(
   numerator
     .double()
     .plusOne()
     .plusOne()
     .minusOne()
 );
 
 //Практика
 let Calculator = function calculation() {
   const calculations = {
     read() {
       this.firstNumber = prompt('Введите первое слагаемое', 1);
       this.secondNumber = prompt('Введите второе слагаемое', 1);
     },
     sum() {
       this.read()
       return +this.firstNumber + +this.secondNumber
       
     },
     mul() {
       this.read()
       return this.firstNumber * this.secondNumber
     }
   }
   return calculations;
 }
 
 let calculator = new Calculator();
 
 console.log('Sum=' + calculator.sum());
 console.log('Mul=' + calculator.mul());