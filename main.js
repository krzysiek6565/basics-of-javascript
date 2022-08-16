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
