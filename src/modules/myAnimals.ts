import { Animal } from './animal'

const Dog1 = new Animal ('Brutus', 28, 'Dog', true)

console.log (Dog1)
Dog1.makeSound()
Dog1.info()
Dog1.markTerritory()

const Dog2 = new Animal ('Fido', 3, 'Dog', false)

console.log (Dog2);
Dog2.makeSound()
Dog2.info()  

Dog1.name = 'Booooogers'
console.log (Dog1)

