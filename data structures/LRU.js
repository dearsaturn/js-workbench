var Node = require('./LRUNode')

class LRU {
  constructor(maxSize) {
    this.maxSize = maxSize
    this.init()
  }

  init(){
    this.size = 0
    this.keyMap = {}
    this.head = this.tail = undefined
  }

  contains(key) {
    return this.keyMap[key] !== undefined
  }

  put(newNode) {
    // empty
    if (this.head === undefined) {
      this.keyMap[newNode.id] = this.tail = this.head = newNode
      this.size++
      return newNode
    }

    // already exists
    if(this.contains(newNode.id)) {
      this.keyMap[newNode.id].value = newNode.value
      return newNode
    }

    // no space left
    if ((this.size + 1) > this.maxSize) {
      this.deleteTail()
      return this.put(newNode)
    }

    // space available
    newNode.next = this.head
    newNode.prev = undefined

    this.head.prev = newNode
    this.head = newNode

    this.keyMap[newNode.id] = newNode
    this.size++
    return newNode
  }

  pop() {
    if(this.head === undefined)
      return

    let popped = this.head
    let new_head = this.head.next

    if(new_head) // do we have something to move up the list?
      new_head.prev = undefined
    else // if not, head is also tail
      this.tail = undefined

    this.head = new_head
    delete this.keyMap[popped.id]
    this.size--
    return popped
  }

  get(id) {
    if ( ! this.contains(id) )
      return

    let newNode = new Node({id: id, value: this.keyMap[id].value})
    this.delete(id)

    return this.put(newNode)
  }

  getAll(){
    let accumulator = []
    let current = this.head

    while(current){
      accumulator.push(current)
      current = current.next
    }

    return accumulator
  }

  delete(id) {
    if( ! this.contains(id) )
      return undefined

    // deleting from head
    if(this.head.id === id)
      return this.pop()

    //deleting from end
    if(this.tail.id === id)
      return this.deleteTail()

    //deleting from middle
    let deleted = this.keyMap[id]
    deleted.prev.next = deleted.next
    deleted.next.prev = deleted.prev

    delete this.keyMap[id]
    this.size--

    return deleted
  }

  deleteTail() {
    let oldTail = this.tail
    let newTail = this.tail.prev

    newTail.next = undefined
    this.tail = newTail

    delete this.keyMap[oldTail.id]
    this.size--
    return oldTail
  }

  deleteAll() {
    this.init()
  }

  map(fn) {
    let current = this.head
    let accumulator = []

    while(current) {
      accumulator.push(fn(current.value))
      current = current.next
    }

    return accumulator
  }
}
