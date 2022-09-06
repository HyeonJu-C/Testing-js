const CatService = require('../cat-service')
const StubCat = require('./stub-cat')

describe('cat service', () => {
  let catService

  beforeEach(() => {
    const stubCat = new StubCat()
    catService = new CatService(stubCat)
  })

  it('should filter cats data started with "A"', async () => {
    const filteredCat = await catService.getFilteredCat('A')

    expect(filteredCat).toContainEqual({ breed: 'Abyssinian' })
    expect(filteredCat).not.toContainEqual({ breed: 'Chartreux' })
  })
})
