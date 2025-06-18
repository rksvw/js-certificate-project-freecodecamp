let duck = {
  name: "Aflac",
  numLeg: 2,
};

// Class Properties in a sence of objects
let Dog = {
  name: "Milo",
  numLeg: 8,

  // Method are propertes that are function
  sayName: () => {
    return `The dog name is ${this.name}.`;
  },

  sayLegs: () => {
    return `This dog has ${this.numLeg} legs.`;
  },
};

// Constructors : Are functions that create new objects. They define properties and behaviours that will belong to the new object. Think of them as a blueprint for the creation of new objects.
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();

console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);

// Parameterized Constructor
function Bird(name, color) {
  this.name = name; //! OwnProperty Property
  this.color = color; //! OwnProperty Property
  this.numLegs = 4;
}

let brewBird = new Bird("Brewny", "brown");
console.log(brewBird.name);
console.log(brewBird.color);
console.log(brewBird.numLegs);

console.log(brewBird instanceof Bird);

let ownProps = [];

for (let property in brewBird) {
  if (brewBird.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

Bird.prototype.eyes = "black"; //? Prototype properties
Bird.prototype.ears = 2;
Bird.prototype.holes = 10;

console.log(brewBird.name);
console.log(brewBird.numLegs);
console.log(brewBird.color);
console.log(brewBird.eyes);

let own_props = [];
let prototype_props = [];

for (let prop in brewBird) {
  if (brewBird.hasOwnProperty(prop)) {
    own_props.push(prop);
  } else {
    prototype_props.push(prop);
  }
}

console.log(own_props);
console.log(prototype_props);

// Summer Pockets
// Please Put Them On, Takamine-san
// One Piece
// The Apothecary Diaries
// I'm the Evil Lord of an Intergalactic Empire!
// Kowloon Generic Romance
// Let This Grieving Soul Retire!
// I Have a Crush at Work

function isInstance(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

console.log(isInstance(brewBird));
console.log(isInstance(blueBird));

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("num num num");
  },
  describe: function () {
    console.log("I name is " + this.name);
  },
};

console.log(Bird.prototype.isPrototypeOf(brewBird.name));
console.log(Object.prototype.isPrototypeOf(Bird.prototype));

// ! SuperType ( or Parent ) [ Animal ]
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// ! SubType ( or Child ) [ beagle ]
let beagle = Object.create(Animal.prototype);
beagle.eat();

// * Prototype is like the "recipe" for creating an object.

// ! Set the Child's Prototype to an Instance of the Parent
/* function Dog() {}

Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let newBeagle = new Dog();
*/

// ChildObject.prototype = Object.create(ParentObject.prototype);

//! immediately invoked function expression or IIFE.
(function () {
  console.log("Chirp, chirp!");
})();

/*
?
An immediately invoked function expression (IIFE) is often used
*
to group related functionality into a single object or module.
*/
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

motionModule.glideMixin(duck);
duck.glide()


let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})()

funModule.isCuteMixin
funModule.singMixin
