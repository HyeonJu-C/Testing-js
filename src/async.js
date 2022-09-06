function getProduct(error) {
  if (error === 'error') {
    return Promise.reject('error...')
  }
  return Promise.resolve({ item: 'almond milk', price: 3 })
}

module.exports = getProduct
