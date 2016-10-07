class LRUNode {
  constructor({id, value, next, prev}) {
    this.value = value
    this.id = id
    this.next = next
    this.prev = prev
  }
}

module.exports = LRUNode
