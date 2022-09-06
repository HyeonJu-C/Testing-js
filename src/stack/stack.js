class Stack {
  constructor() {
    this.items = []
    this.length = 0
    this.topItem = null
  }

  getLength() {
    return this.length
  }

  getTopItem() {
    return this.topItem
  }

  push(item) {
    this.items = [...this.items, item]
    this.length = this.length + 1
    this.topItem = this.items[this.length - 1]
  }
  pop() {
    if (this.length <= 0) throw new Error('items are empty')
    this.items.pop()
    this.length = this.length - 1
    this.topItem = this.items[this.length - 1] || null
  }
}

module.exports = Stack
