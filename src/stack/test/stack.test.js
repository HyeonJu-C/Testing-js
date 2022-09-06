const Stack = require('../stack')

describe('stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('stack is created with length 0', () => {
    expect(stack.getLength()).toBe(0)
  })

  it('push should add item to the last of stack', () => {
    for (let i = 0; i < 100; i++) {
      stack.push(`push ${i}`)
    }
    stack.push({ name: 'push 3' })

    expect(stack.getLength()).toBe(101)
    expect(stack.getTopItem()).toEqual({ name: 'push 3' })
  })

  describe('pop', () => {
    it('should remove last item', () => {
      stack.push('this will be popped soon')
      stack.pop()

      expect(stack.getLength()).toBe(0)
      expect(stack.getTopItem()).toBe(null)
    })

    it('should not be executed when stack.length <= 0', () => {
      const prevLength = stack.length // 0

      expect(() => stack.pop()).toThrowError()
      expect(stack.getLength()).toBe(prevLength)
      expect(stack.getTopItem()).toBeNull()
    })
  })
})
