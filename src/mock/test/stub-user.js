class StubUser {
  async login(id, password) {
    if (!id || !password) throw new Error('missing id or password')

    return Promise.resolve({
      data: [{ id, password }],
    })
  }
}

module.exports = StubUser
