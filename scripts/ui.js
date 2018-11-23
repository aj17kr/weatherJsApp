class UI{
    showWeatherDetail(res){
        $('#w-location').html(`${res.city} (${res.state},${res.country},${res.zipcode})`);
        $('#w-desc').html(`${res.feels_like_desc}`);
        $('#w-temp').html(`${res.temp}`);
        $('#w-icon').attr(`src`,res.icon_url);

        $('#w-humidity').html(`Relative Humidity: ${res.humidity}`);
        $('#w-dewpoint').html(`Dewpoint: ${res.dewpoint}`);
        $('#w-feels-like').html(`Feels Like: ${res.feels_like_temp}`);
        $('#w-wind').html(`Wind: ${res.wind}`);
    }

    showAlert(message){
        $('#errorAlert').html(message);
        $('#errorAlert').css('visibility','visible')
        
        setTimeout(function(){
            $('#errorAlert').css('visibility','hidden');
        },1800);

    }
}