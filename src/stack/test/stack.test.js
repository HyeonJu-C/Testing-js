const Stack = require('../stack')

describe('stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('push should add item to the last of stack', () => {
    for (let i = 0; i < 100; i++) {
      stack.push(`push ${i}`)
    }
    stack.push({ name: 'push 3' })

    expect(stack.length).toBeCloseTo(101)
    expect(stack.topItem).toEqual({ name: 'push 3' })
  })

  it('pop should remove last item', () => {
    stack.push('push')
    stack.push('this will be popped soon')
    stack.pop()

    expect(stack.length).toBe(1)
    expect(stack.topItem).toBe('push')
    expect(stack.topItem).not.toBe('this will be popped soon')
  })

  it('pop should not be executed when stack.length <= 0', () => {
    const prevLength = stack.length // 0
    stack.pop()

    expect(stack.length).toBe(prevLength)
    expect(stack.topItem).toBeNull()
  })
})
