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
      this.pop
      return this.put(newNode)
    }

    // space available
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode

    this.keyMap[newNode.id] = newNode
    this.size++
    return newNode
  }

  get pop() {
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

    let newNode = this.keyMap[id]
    newNode.prev = newNode.next = undefined

    this.delete(id)
    return this.put(newNode)
  }

  get getAll(){
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
      return this.deleteTail

    //deleting from middle
    let deleted = this.keyMap[id]
    deleted.prev = deleted.next
    delete this.keyMap[id]
    this.size--

    return deleted
  }

  get deleteTail(){
    let oldTail = this.tail
    let newTail = this.tail.prev
    newTail.next = undefined
    this.tail = newTail

    delete this.keyMap[oldTail.id]
    this.size--
    return oldTail
  }

  get deleteAll() {
    this.init()
  }
}

lru = new LRU(4)
lru.put(new Node({ id: 'B', value: 54 }))
lru.put(new Node({ id: 'C', value: 56 }))
lru.put(new Node({ id: 'D', value: 33 }))
lru.put(new Node({ id: 'E', value: 44 }))
lru.get('E')
debugger
