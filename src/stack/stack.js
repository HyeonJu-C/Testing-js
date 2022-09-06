class Stack {
  constructor() {
    this.items = []
    this.length = 0
    this.topItem = null
  }

  push(item) {
    this.items = [...this.items, item]
    this.length = this.length + 1
    this.topItem = this.items[this.length - 1]
  }
  pop() {
    if (this.length <= 0) return
    this.items.pop()
    this.length = this.length - 1
    this.topItem = this.items[this.length - 1]
  }
}

module.exports = Stack
