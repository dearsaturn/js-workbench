class Justify {
  constructor(str, maxChars) {
    this.str = str
    this.maxChars = maxChars
  }

  linesToArray() {
    return this.str.split('\n')
  }

  blankSpace(length) {
    return Array(length+1).join(' ')
  }

  get right() {
    return this.linesToArray()
      .map((line) => {
        if(line.length > this.maxChars)
          return line

        return this.blankSpace(this.maxChars - line.length) + line
      })
      .join('\n')
  }

  get left() {
    return this.linesToArray()
      .map((line) => {
        if(line.length > this.maxChars)
          return line

        return line + this.blankSpace(this.maxChars - line.length)
      })
      .join('\n')
  }

  get center() {
    return this.linesToArray()
      .map((line) => {
        if(line.length > this.maxChars)
          return line

        let marginSize = Math.floor((this.maxChars - line.length)/2)
        return this.blankSpace(marginSize) + line + this.blankSpace(marginSize)
      })
      .join('\n')
  }
}

console.log(new Justify('test me\nboy', 20).right)
console.log(new Justify('test me\nboy', 20).left)
console.log(new Justify('test me\nboy', 20).center)
