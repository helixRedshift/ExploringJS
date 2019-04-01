let mainImg = document.getElementById("myMap")
let officeBlue = document.getElementById("officeBlue")
let countrysideRed = document.getElementById('countrysideRed')
let houseYellow = document.getElementById('houseYellow')
let industriesPink = document.getElementById("industriesPink")
let playgroundGreen = document.getElementById("playgroundGreen")

officeBlue.onmouseover = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-blue.png"
}
officeBlue.onmouseout = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
}

countrysideRed.onmouseover = function() {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-red.png"
}
countrysideRed.onmouseout = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
}

houseYellow.onmouseover = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-yellow.png"
}
houseYellow.onmouseout = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
}

industriesPink.onmouseover = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-pink.png"
}
industriesPink.onmouseout = function() {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
}

playgroundGreen.onmouseover = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-green.png"
}
playgroundGreen.onmouseout = function () {
  mainImg.src = "http://www.sarabianchi.it/code-images/mappa-interattiva/img/map-original.png"
}
