window.addEventListener("load", () => {
  let long
  let lat
  let tempSummary = document.querySelector(".summary")
  let tempSection = document.querySelector('.temperature-section')
  let tempDegree = document.querySelector('.temperature-degree')
  let locationDescription = document.querySelector('.location-description')
  let skycons = new Skycons({"color": "white"})

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude
      long = position.coords.longitude
      const proxy = `https://cors-anywhere.herokuapp.com/`
      const api = `${proxy}https://api.darksky.net/forecast/12cf3fec4c7bb17f09a33fabb5478757/${lat},${long}`

      fetch(api)
        .then(response => {
          return response.json()
        })
        .then(data => {
          locationDescription.textContent = data.timezone
          let temperatureFarenhite = data.currently.temperature
          tempSection.textContent = temperatureFarenhite
          tempSummary.textContent = data.currently.summary
          let tempIcon = data.currently.icon
          tempIcon = tempIcon.replace(/-/g, '_').toUpperCase()
          skycons.set(document.getElementById('location-icon'), Skycons[tempIcon])
          skycons.play()

          //Change temperature to centigrade
          tempSection.addEventListener('click', () => {
            if (tempDegree.textContent === 'F') {
              tempDegree.textContent = 'C'
              tempSection.textContent = Math.floor((temperatureFarenhite - 32) * (5/9) )
            }
            else {
              tempDegree.textContent = 'F'
              tempSection.textContent = temperatureFarenhite
            }
          })

        })
    })
  }
})
