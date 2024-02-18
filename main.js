fetch('https://iot.fvh.fi/opendata/uiras/uiras2_v2.geojson')
  .then(response => response.json())
  .then(data => {
    // Find the value of properties/temp_water where properties/name is "uunisaari"
    data.features.forEach(feature => {
      if (feature.properties.name === "Uunisaari") {
        const tempWater = Math.round(feature.properties.temp_water* 10) / 10 || feature.properties.temp_water;
        console.log("Temperature of water at Uunisaari:", tempWater);
        const temperatureContainer = document.getElementById('temperature-container');
        const temperatureBox = document.createElement('div');
        temperatureBox.classList.add('temperature-box');
        temperatureBox.textContent = `Seawater temperature\n${tempWater} °C`;
        temperatureContainer.appendChild(temperatureBox);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });