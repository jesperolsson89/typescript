const { Animal } = require('../dist/modules/animal') // adjust path as needed

describe('Animal Class', () => {
  let consoleSpy

  beforeEach(() => {
    // Mock console.log so we can assert on output
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('constructor should correctly assign properties', () => {
    const animal = new Animal('Leo', 5, 'Lion', true)
    expect(animal.name).toBe('Leo')
    expect(animal.age).toBe(5)
    expect(animal.species).toBe('Lion')
    expect(animal.isKind).toBe(true)
  })

  test('makeSound should log the correct message', () => {
    const animal = new Animal('Max', 3, 'Dog', true)
    animal.makeSound()
    expect(consoleSpy).toHaveBeenCalledWith('Max makes a sound.')
  })

  test('info should log correct message when isKind is true', () => {
    const animal = new Animal('Bella', 2, 'Cat', true)
    animal.info()
    expect(consoleSpy).toHaveBeenCalledWith(
      'This is a Cat named Bella, and it is 2 years old. It is kind.'
    )
  })

  test('info should log correct message when isKind is false', () => {
    const animal = new Animal('Spike', 4, 'Dog', false)
    animal.info()
    expect(consoleSpy).toHaveBeenCalledWith(
      'This is a Dog named Spike, and it is 4 years old. It is not kind.'
    )
  })

  test('markTerritory should log the correct message', () => {
    const animal = new Animal('Charlie', 6, 'Wolf', true)
    animal.markTerritory()
    expect(consoleSpy).toHaveBeenCalledWith('Charlie is pissing.')
  })
})
