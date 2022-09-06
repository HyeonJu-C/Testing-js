const UserSercive = require('../user-service')
const StubUser = require('./stub-user')

describe('user service', () => {
  let userService
  let stubUser

  beforeEach(() => {
    stubUser = new StubUser()
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

  it('shoud not be called if isLoggedin is "true', async () => {
    // expect는 mock 함수 또는 spy 함수 만을 인자로 받음
    // 따라서 이럴 때에는 stub 대신 user login과 관련된 mock을 만드는 것이 나을 수 있음
    const stubUserLogin = jest.spyOn(stubUser, 'login')

    // isLoggedin을 직접 true로 바꾸는 대신,
    // login 함수를 두번 호출하는 방법도 있음
    userService.isLoggedin = true
    userService.login('이름', '전화번호')

    expect(stubUserLogin).not.toHaveBeenCalled()
  })
})
