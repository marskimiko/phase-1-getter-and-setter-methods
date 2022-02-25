class Circle {

  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
    // this.radius = this.radius * 2
    // console.log('newDiameter', newDiameter)
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI)
    // this.diameter = Math.PI * this.diameter
    // console.log('new circumference', newCircumference)
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI)
    // this.radius = MATH.PI * (Math.sqrt(newArea))
    // console.log('newArea', newArea)
  }
}