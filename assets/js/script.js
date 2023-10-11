


    
     const apiUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={26fe44de11957c828f9297ab115d2423}';

     const fetchDataButton = document.getElementById('button-addon2');
     const dataContainer = document.getElementById('dataContainer');

     
     fetchDataButton.addEventListener('click', () => {
         fetch(apiUrl)
             .then(response => response.json())
             .then(data => {
                 dataContainer.innerHTML = JSON.stringify(data, null, 2);
             })
             .catch(error => {
                 console.error('Error fetching data:', error);
             });
     });