"use strict"



const url = "https://api.openweathermap.org/data/2.5/weather?zip=11235,us&appid=ad56f041d195cd2846790c71286da726";


$.ajax({
    url: url,
    success: function (result) {
        console.log(result);
        console.log(result.name);
        let f = Math.round(result.main.temp * (9 / 5) - 459.67);
        let fahrenheit = f.toString();

        let w = Math.round(result.wind.speed / .44704);
        let Windspeed = w.toString();

        $('#weather').html(result.weather[0].description)
        $('#location').html(result.name);
        $('#temp').html(fahrenheit + "°");
        $('#wind').html(Windspeed + " mph")

       

    }
})

