fetch('https://iot.fvh.fi/opendata/uiras/uiras2_v2.geojson')                                                    // Fetch the JSON data
  .then(response => response.json())                                                                            // Parse the JSON data   
  .then(data => {                                                                                               // Process the JSON data
    // Find the value of properties/temp_water where properties/name is "uunisaari"
    data.features.forEach(feature => {                                                                          // Loop through the features
      if (feature.properties.name === "Uunisaari") {                                                            // Check if the name is "Uunisaari"
        const tempWater = Math.round(feature.properties.temp_water* 10) / 10 || feature.properties.temp_water;  // Round to 1 decimal place
        //console.log("Temperature of water at Uunisaari:", tempWater);
        const temperatureContainer = document.getElementById('temperature-container');                         // Get the temperature container element 
        const temperatureBox = document.createElement('div');                                                  // Create the temperature box element
        temperatureBox.classList.add('temperature-box');                                                       // Add the class "temperature-box"
        temperatureBox.textContent = `Seawater temperature\n${tempWater} °C`;                                  // Set the text content of the temperature box
        temperatureContainer.appendChild(temperatureBox);                                                      // Append the temperature box to the temperature container
      }
    });
  })
  .catch(error => {                                                                                             // Catch any errors
    console.error('Error fetching the JSON data:', error);
  });