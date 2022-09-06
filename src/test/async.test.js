const getProduct = require('../async')

// 1. Promise
// then and catch returns promise
// => it(test) returns promise

describe('get product', () => {
  it('success with milk data', () => {
    return getProduct() //
      .then((data) => expect(data).toEqual({ item: 'almond milk', price: 3 }))
  })
  it('network error', () => {
    return getProduct('error') //
      .catch((data) => expect(data).toMatch(/error/))
  })
})

// 2. async - await
describe('get product', () => {
  it('success with milk data', async () => {
    const result = await getProduct()
    expect(result).toEqual({ item: 'almond milk', price: 3 })
  })
  it('network error', async () => {
    try {
      await getProduct('error')
    } catch (error) {
      expect(error).toMatch(/error/)
    }
  })
})
