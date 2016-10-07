class LRUNode {
  constructor({id, value, next, prev}) {
    this.id = id
    this.value = value
    this.next = next
    this.prev = prev
  }
}

module.exports = LRUNode
