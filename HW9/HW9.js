// Задача 1
class Planet {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return "Planet name is " + this.name;
  }
}
class PlanetWithSatellite extends Planet {
  constructor(name, satellite) {
    super(name);
    this.satellite = satellite;
  }

  getName() {
    return super.getName() + ". The satellite is " + this.satellite;
  }
}
var earth = new PlanetWithSatellite("earth", "moon");
console.log(earth.getName());

// Задача 2
class Building {
  constructor(name, floors) {
    this.name = name;
    this.floors = floors;
  }

  getFloors() {
    return this.floors;
  }

  setFloors(floors) {
    this.floors = floors;
    return this;
  }
}

class House extends Building {
  constructor(name, floors, apartmentsPerFloor) {
    super(name, floors);
    this.apartmentsPerFloor = apartmentsPerFloor;
  }

  getFloors() {
    return {
      этажи: this.floors,
      "всего квартир": this.floors * this.apartmentsPerFloor
    };
  }
}

let house = new House("house", 4, 4);
console.log(house.getFloors());

class ShoppingMall extends Building {
  constructor(name, floors, shopsPerFloor) {
    super(name, floors);
    this.shopsPerFloor = shopsPerFloor;
  }

  getFloors() {
    return {
      этажи: this.floors,
      "всего магазинов": this.floors * this.shopsPerFloor
    };
  }
}

let shoppingMall = new ShoppingMall("Shopping Mall", 3, 15);
console.log(shoppingMall.getFloors());

// Задача 3
class Furniture {
  constructor(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type
  }
   
  getType() {
   return this.type
  }

  getInfo() {
     return this.name + ' ' + this.price + ' ' + this.getType()
  }
}

let furniture = new Furniture('стол', '100$', 'бытовая')
console.log(furniture.getInfo())

class OfficeFurniture extends Furniture {
   constructor(name, price, isComputer) {
      super(name, price);
      this.isComputer = isComputer
   }

   getIsComputer() {
    return this.isComputer
   }

   getInfo() {
      return this.name + ' ' + this.price + ' ' + this.getIsComputer()
   }
}

let officeFurniture = new OfficeFurniture('стол', '100$', true)
console.log(officeFurniture.getInfo())

// Задача 4
class User {
   constructor(name, data) {
      this.name = name;
      this.data = data;
   }

   getInfo() {
      return this.name + ' ' + this.data
   }
}

class Admin extends User {
   constructor(name, data, superAdmin) {
      super(name, data)
      this._superAdmin = superAdmin
   }

   getInfo() {
      if (this._superAdmin === true || this._superAdmin === false) {
         return super.getInfo() + ' ' + this._superAdmin
      } else {
         console.error('error')
      }
   }
}

let admin = new Admin('админ', '31.10.2019', true)
console.log(admin.getInfo())

class Guest extends User {
   constructor(name, data, validDate) {
      super(name, data)
      this.validDate = validDate
   }

   getInfo() {
      return super.getInfo() + ' ' + this.validDate
   }
}

let guest = new Guest('гость', '13.10.2019', 'осталось 3 недели')
console.log(guest.getInfo())