const Stack = require('../stack')

describe('stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  // 1. stack이 처음 만들어 질 때 length === 0 테스트가 빠졌음!
  // => test code는 내가 만든 모듈, api, 기능... 등등에 대한 "명세서" 역할을 한다.
  // => 따라서 처음 Stack이 만들어 질 때 어떤 state를 가지고 있는지 테스트 코드에서 보여주는 것이라고 이해했음

  it('push should add item to the last of stack', () => {
    for (let i = 0; i < 100; i++) {
      stack.push(`push ${i}`)
    }
    stack.push({ name: 'push 3' })

    // 2. 내부 구현사항(속성, state)을 테스트 하지 않는다!!!
    // 우리가 모듈을 만들면, 사용자는 인터페이스(method)를 사용하기 때문
    // => class의 속성 값이 무엇인지 테스트하는 것이 아니라 인터페이스의 실행 결과를 테스트한다
    expect(stack.length).toBeCloseTo(101)
    expect(stack.topItem).toEqual({ name: 'push 3' })
  })

  // 3. pop과 관련된 테스트를 다시 describe로 묶는다
  describe('pop', () => {
    it('should remove last item', () => {
      stack.push('this will be popped soon')
      stack.pop()

      expect(stack.length).toBe(0)
      expect(stack.topItem).toBe(null)
    })

    // throw Error 핸들링도 가능함
    it('should not be executed when stack.length <= 0', () => {
      const prevLength = stack.length // 0

      // 1. try - catch
      try {
        stack.pop()
      } catch (error) {
        expect(error.message).toMatch(/empty/)
      }

      // 2. toThrow
      expect(stack.pop).toThrowError()

      expect(stack.length).toBe(prevLength)
      expect(stack.topItem).toBeNull()
    })
  })
})
