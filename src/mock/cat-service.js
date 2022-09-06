const Cat = require('./cat')

class CatService {
  constructor() {
    this.cat = new Cat()
  }

  async getFilteredCat(character) {
    const allBreeds = await this.cat.getAllBreeds()
    return allBreeds?.data?.filter((breed) => breed.breed.startsWith(character))
  }
}

module.exports = CatService

const test = new CatService()
test.getFilteredCat('A')
