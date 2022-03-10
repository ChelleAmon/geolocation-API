const latitude = document.querySelector("#latitude");
const longitude = document.querySelector('#longitude');

if('geolocation' in navigator) {
   console.log("Geolocation is available")

    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const long = position.coords.longitude

        latitude.textContent = lat
        longitude.textContent = long
    });
  
  } else {
    console.log("Geolocation is NOT available. I'm sorry!")
  }