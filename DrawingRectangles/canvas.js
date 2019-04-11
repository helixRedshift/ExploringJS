  let canvas = document.getElementById('canvas')
  let canObj = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  let rect = []

  function generateRandomColor() {
    return ("rgba("
      + Math.random()*250 + ","
      + Math.random()*250 + ","
      + Math.random()*250 + ","
      + Math.ceil(Math.random() * 10) / 10 +
    ")")
  }

  function drawRectangle() {
    this.color = generateRandomColor()
    this.length = Math.random()*100
    this.breadth = Math.random()*50
    this.x = Math.random()*window.innerWidth - this.length
    this.y = Math.random()*window.innerHeight - this.breadth

    this.update = function() {
      canObj.fillStyle = this.color
      canObj.fillRect(this.x, this.y, this.length, this.breadth)
      canObj.stroke()
     }

  }


 for (let i=0; i<50; i++) {
   rect.push(new drawRectangle())
 }

function animate() {
  rect.forEach(rectangle)

  function rectangle(r) {
   requestAnimationFrame(rectangle)
   r.update()
 }
}

  setInterval(function() {
    for (let i=0; i<10; i++) {
      rect.push(new drawRectangle())
      animate()
    }
    rect.splice(0,50)
  }, 300)

animate()
