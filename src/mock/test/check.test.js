const check = require('../check')

const predicateMock = jest.fn()
const onSuccessMock = jest.fn()
const onFailMock = jest.fn()

predicateMock //
  .mockReturnValueOnce(true) // first call returns true
  .mockReturnValueOnce(false) // second call returns false

// predicateMock을 만드는 대신
// check의 인자에
// () => true, () => false 콜백 함수를 직접 전달할 수도 있다.
// ex) check(()=>true, onSuccessMock, onFailMock)

describe('check', () => {
  it('onSuccess will be called with "yes", if predicate returns truthy', () => {
    check(predicateMock, onSuccessMock, onFailMock)

    expect(onSuccessMock).toHaveBeenCalledTimes(1)
    expect(onSuccessMock).toHaveBeenCalledWith('yes')
    expect(onFailMock).not.toHaveBeenCalled()
  })

  it('onFail will be called with "no", if predicate returns falsy', () => {
    check(predicateMock, onSuccessMock, onFailMock)

    expect(onFailMock).toHaveBeenCalledTimes(1)
    expect(onFailMock).toHaveBeenCalledWith('no')
    expect(onSuccessMock).not.toHaveBeenCalled()
  })
})
