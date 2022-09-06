class UserSercive {
  constructor(user) {
    this.user = user
    this.isLoggedin = false
  }

  async login(id, password) {
    if (!this.isLoggedin) {
      try {
        await this.user.login(id, password)
        this.isLoggedin = true
      } catch (error) {
        return 'login failed.'
      }
    }
  }
}

module.exports = UserSercive
