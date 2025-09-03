class Animal {
    name: string;
    age: number;
    species: string;
    isKind: boolean;
    constructor(name: string, age: number, species: string, isKind: boolean) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.isKind = isKind;
    }

    makeSound(): void {
        console.log( `${this.name} makes a sound.`);
    }

    info(): void {
        console.log(`This is a ${this.species} named ${this.name}, and it is ${this.age} years old. It is ${this.isKind ? "kind" : "not kind"}.`);
    }

    markTerritory(): void {
        console.log(`${this.name} is pissing.`);
    }
}

export {Animal};



