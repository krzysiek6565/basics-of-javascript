//constructor function one
function Person(name){
  this.name = name;
  this.talk = function(){
    return `My name is ${this.name}`
  }
}

const ja = new Person('Krysztof');
console.log(ja.talk());

//returning the object
const object1 = {
  weight: 28,
  hight: 174,
  price: 200
}

function man(obj1){
  return obj1;
}

console.log(man(object1));

//creating the object one
const human = Object.create(object1);
console.log(human);

//inheriting from the object1
console.log(human.prototype === object1.prototype);
console.log(Person.prototype);

//factory function
function factory1(model){
  return object2 = {
    brand: 'Tesla',
    model,
    carPrice: 200000
  }
}

const myCar = factory1('Y');
console.log(myCar.model);

//createing the object two
const cat = {
  legs: 4,
  eyes: 2,
  tail: 1,
  ears: 2
}

function createCat(){
  return Object.create(cat, {
    name:{
      value: 'Bonifacy'
    }
  })
}

const britishCat = createCat();
console.log(britishCat);

//creating the object three
function Vessel(){
  this.swim = function(){
    return 'We cruise fast';
  }
}

const container = new Vessel();
console.log(container.swim());

//keyword this
function drive(){
  return `I am driving ${this.speed} m/h`;
}

const jack = {
  speed: 68,
  drive
}

console.log(jack.drive());

//Adding an object to the function
function giveColor(){
  return `My favourite color is ${this.color}`;
}

const anna = {
  color: 'grey'
}

const result = giveColor.bind(anna);
console.log(result());
console.log(giveColor.bind(anna)());
console.log(giveColor.call(anna));

//setTimeout with keyword this
function Animal(){
  setTimeout(function show(){
    console.log(this);
  }, 1000);
}

const zebra = new Animal();

//arrow function returning keyword this
const fish = {
  weight: 98,
  fishTalk: function(){
    return this;
  },
  fishTalk1: () => {
    return this;
  }
}

console.log(fish.fishTalk1());
console.log(fish.fishTalk());

//arrow function, keyword this and callbacks

const dog = {
  race: 'bulldog',
  run(){
    setTimeout(() => {
      console.log(this.race);
    }, 1000);
  }
}

dog.run();

//arrow function does not execute its own execution context
//do not use arrow function with constructor
function Bike(){};
Bike.prototype.drive = function(){
  return this + ' hej1';
}
Bike.prototype.jump = () => {
  return this + ' hej2';
}

const yellowBike = new Bike();
console.log(yellowBike.drive());
console.log(yellowBike.jump());

//some callbacks funtions should be arrow function but some should not
function inn(callback){
  callback();
}
function outt(){
  console.log(this + ' hej3');
}
inn(outt);


//do not use arrow functions with event listeners
//do not use arrow function for object methods
//do not use arrow function for prototypes
//do not use arrow function for constructors
