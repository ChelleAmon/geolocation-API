if('geolocation' in navigator) {
   console.log("Geolocation is available")

    navigator.geolocation.getCurrentPosition((position) => {
        console.log('Latitude: ', position.coords.latitude), 
        console.log('Longitude: ', position.coords.longitude);
    });
  
  } else {
    console.log("Geolocation is NOT available. I'm sorry!")
  }