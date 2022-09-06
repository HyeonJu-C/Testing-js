class StubCat {
  async getAllBreeds() {
    return Promise.resolve({
      data: [{ breed: 'Abyssinian' }, { breed: 'Chartreux' }],
    })
  }
}

module.exports = StubCat
