class Dot {
  constructor(x, y, r, g, b, imageX, imageY) {
    this.x = x
    this.y = y
    this.r = r
    this.g = g
    this.b = b
    this.imageX = imageX
    this.imageY = imageY
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')'
    ctx.fill()
  }
}

export {Dot}