class Weather{

    constructor(state, city){
        this.apiKey ='34cf313b01a7d34d';
        this.query = `geolookup/conditions/q/${state}/${city}.json`;
    }

    //Getting weather details from calling weather API
    async getWeather(){
        console.log("Getting data from weather API....")
        // console.log(this.query)
        const weatherResponse = await fetch(`https://api.wunderground.com/api/${this.apiKey}/${this.query}`);
        const responseData=await weatherResponse.json();
        return responseData;
    }

    //Change weather location
    changeLocation(state,city){
        this.query = `geolookup/conditions/q/${state}/${city}.json`;
        console.log(`Changing current state and city to : ${state},${city} respectively`)
        // console.log(this.query)
    }
    
    // Get location on the basis of Geolocation API
    getGeoLocationWeather(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(shareLocation,showError); 
            } else {
                alert("Geolocation is not supported by this browser.");
            }
            //saving current this object properties in that to use inside sharedLocation function.
            const that=this;
            function shareLocation(position){
                that.query = `geolookup/conditions/q/${position.coords.latitude},${position.coords.longitude}.json`;
                console.log('Giving cordinates to the api', that.query, position.coords);
                getWeather();
            }

            function showError(error){
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.");
                        break;
                }
            }
    }
}
   



