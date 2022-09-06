const UserSercive = require('../user-service')
const StubUser = require('./stub-user')

describe('user service', () => {
  let userService
  beforeEach(() => {
    const stubUser = new StubUser()
    userService = new UserSercive(stubUser)
  })

  it('isLoggedin set to "true" after login is called.', async () => {
    await userService.login('이름', '비밀번호')
    expect(userService.isLoggedin).toBe(true)
  })

  it('login fail if id or password are blank', async () => {
    try {
      await userService.login()
    } catch (error) {
      expect(error).toBe(/login failed./)
    }
  })
})
