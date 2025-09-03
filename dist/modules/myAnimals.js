"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const Dog1 = new animal_1.Animal("Brutus", 28, "Dog", true);
console.log(Dog1);
Dog1.makeSound(); // --- IGNORE ---
Dog1.info();
Dog1.markTerritory();
const Dog2 = new animal_1.Animal("Fido", 3, "Dog", false);
console.log(Dog2);
Dog2.makeSound(); // --- IGNORE ---
Dog2.info();
Dog1.name = "Booooogers";
console.log(Dog1);
