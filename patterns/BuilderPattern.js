class Car {
  constructor({year, make, model}){
    this.make = make
    this.model = model
    this.year = year
  }

  get toString(){
    return `${ this.year } ${ this.make } ${ this.model }`
  }
}


class CarBuilder {
  constructor(){
    this.carOptions = {}
    this.create = this.create.bind(this)
    this.setModel = this.setModel.bind(this)
    this.setMake = this.setMake.bind(this)
    this.setYear = this.setYear.bind(this)
  }

  create(){
    return new Car(this.carOptions)
  }

  setModel(model){
    this.carOptions.model = model
    return this
  }

  setMake(make){
    this.carOptions.make = make
    return this
  }

  setYear(year){
    this.carOptions.year = year
    return this
  }
}

let myCar = new CarBuilder()
  .setModel('Lexus')
  .setMake('ES330')
  .setYear('2011')
  .create()

console.log(myCar.toString) //eslint-disable-line no-console
