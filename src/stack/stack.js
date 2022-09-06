class Stack {
  constructor() {
    this.length = 0
    this.topItem = null
  }

  getLength() {
    return this.length
  }

  getTopItem() {
    return this.topItem?.item || null
  }

  push(item) {
    const node = { item, next: this.topItem }
    this.topItem = node
    this.length++
  }
  pop() {
    if (this.length <= 0) throw new Error('items are empty')
    this.topItem = this.topItem.next || null
    this.length--
  }
}

module.exports = Stack
