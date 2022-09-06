class User {
  async login(id, password) {
    if (!id || !password) throw new Error('missing id or password')

    const result = await fetch('example.com/')
    const response = await result.json()
    return response.data
  }
}
