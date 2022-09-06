const Calculator = require('../calculator.js')

describe('calculator', () => {
  let calculator
  beforeEach(() => {
    calculator = new Calculator()
  })

  it('set value', () => {
    expect(calculator.value).toBe(0)

    calculator.set(5)
    expect(calculator.value).toBe(5)
  })
  it('3 adds 5 equals 8', () => {
    calculator.set(3)
    calculator.add(5)

    expect(calculator.value).toBe(8)
  })

  it('5 subs 1 equals 4', () => {
    calculator.set(5)
    calculator.subtract(1)

    expect(calculator.value).toBe(4)
  })

  it('9 multiplys 9 equals 81', () => {
    calculator.set(9)
    calculator.multiply(9)

    expect(calculator.value).toBe(81)
  })

  it('6 divide 2 equals 3', () => {
    calculator.set(6)
    calculator.divide(2)

    expect(calculator.value).toBe(3)
  })
})
