// Initialize localStorage
const storage=new Storage();
//Get saved state and city from localStorage
const weatherLocation=storage.getStorageLocation();
//Initialize weather with default state and city got from localStorage.
const weather = new Weather(weatherLocation.state,weatherLocation.city);
// Initialize UI
const ui=new UI();

// Load getWeather function on page load.
document.addEventListener('DOMContentLoaded', getWeather());

// Change weather location on Change location button
$('#w-form').on('submit',()=>{
    const state=$('#state').val();
    const city=$('#city').val();

    // if(state==="" || city===""){
    //    return alert('enter some value')
    //    }

    weather.changeLocation(state,city);
    console.log(`Loaded new state and city as.... ,${state},${city}`);
    //Saving weather state,city in localStorage session.
    storage.setStorageLocation(state,city);
    //Call getWeather function to get new weather.
    getWeather();
});

//Get Weather information
function getWeather(){
    weather.getWeather()
    .then(results=>{

        // if(results.response.results){
        console.log(results)
        
        // Making weatherDetail object to save data coming from API and passing to UI function to dynamically fill result.
        const weatherDetail={
        city:results.location.city,
        state:results.current_observation.display_location.state_name,
        country:results.location.country_name,
        zipcode:results.location.zip,

        feels_like_desc:results.current_observation.weather,
        temp:results.current_observation.temperature_string,
        temp_c:results.current_observation.temp_c,
        temp_f:results.current_observation.temp_f,
        icon_url:results.current_observation.icon_url,

        humidity:results.current_observation.relative_humidity,
        dewpoint:results.current_observation.dewpoint_string,
        dewpoint_c:results.current_observation.dewpoint_c,
        dewpoint_f:results.current_observation.dewpoint_f,
        feels_like_temp:results.current_observation.feelslike_string,
        feels_like_temp_c:results.current_observation.feelslike_c,
        feels_like_temp_f:results.current_observation.feelslike_f,
        wind:results.current_observation.wind_string
        }
        ui.showWeatherDetail(weatherDetail);
    })
    .catch(function(e){
        console.log("Oops..Error",e);
        ui.showAlert(`Error finding weather for your location ,${weatherLocation.state},${weatherLocation.city}`);
    })
}


$('#w-geoLocationBtn').click(() => {
    weather.getGeoLocationWeather();
});


