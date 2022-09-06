class UserSercive {
  constructor(user) {
    this.user = user
    this.isLoggedin = false
  }

  async login(id, password) {
    // 로그인 상태가 아닐 때에만 동작하는지 확인하는 테스트가 빠졌음!
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
