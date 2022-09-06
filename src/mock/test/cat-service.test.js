const mockGetAllBreeds = () =>
  Promise.resolve({
    data: [{ breed: 'Abyssinian' }, { breed: 'Chartreux' }],
  })
const CatService = require('../cat-service') // error occured when i hoisted this code to 1st line

jest.mock('../cat', () => {
  return jest.fn().mockImplementation(() => {
    return { getAllBreeds: mockGetAllBreeds }
  })
})

describe('cat service', () => {
  let catService

  beforeEach(() => {
    catService = new CatService()
  })

  it('get cat breeds data started with "A"', async () => {
    const filteredCat = await catService.getFilteredCat('A')

    expect(filteredCat).toContainEqual({ breed: 'Abyssinian' })
    expect(filteredCat).not.toContainEqual({ breed: 'Chartreux' })
  })
})
