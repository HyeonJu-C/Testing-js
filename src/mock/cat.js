class Cat {
  constructor() {
    this.baseUrl = 'https://catfact.ninja'
  }

  async getAllBreeds() {
    try {
      const result = await fetch(`${this.baseUrl}/breeds`)
      const response = await result.json()
      return response
    } catch (error) {
      return "can't get all cat breeds"
    }
  }
}

module.exports = Cat
