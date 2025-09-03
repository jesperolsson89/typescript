"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    name;
    age;
    species;
    isKind;
    constructor(name, age, species, isKind) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.isKind = isKind;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
    info() {
        console.log(`This is a ${this.species} named ${this.name}, and it is ${this.age} years old. It is ${this.isKind ? 'kind' : 'not kind'}.`);
    }
    markTerritory() {
        console.log(`${this.name} is pissing.`);
    }
}
exports.Animal = Animal;
