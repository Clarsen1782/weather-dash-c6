


    
     const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={49ddb2ecd7ff25b9325ac091f98ae63c}';

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

     const btnBlock = document.getElementsByClassName("btn-block")
     const cityUrl = "api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={49ddb2ecd7ff25b9325ac091f98ae63c}";
     const cityName = [spokane, seattle, portland, sanFran, losAng]

    

    

