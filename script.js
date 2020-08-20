
$(document).ready(function () {


    $('#button').click(function () {
        let zipcode = $('#zip').val();




        const url = "https://api.openweathermap.org/data/2.5/forecast?zip="+ zipcode +",us&appid=ad56f041d195cd2846790c71286da726";


        $.ajax({
            url: url,
            success: function (result) {
                
                let f1= Math.round(result.list[0].main.temp * (9 / 5) - 459.67);
                let fahrenheit1 = f1.toString();
                let f2 = Math.round(result.list[8].main.temp * (9 / 5) - 459.67);
                let fahrenheit2 = f2.toString();
                let f3 = Math.round(result.list[16].main.temp * (9 / 5) - 459.67);
                let fahrenheit3 = f3.toString();
                let f4 = Math.round(result.list[24].main.temp * (9 / 5) - 459.67);
                let fahrenheit4 = f4.toString();
                let f5 = Math.round(result.list[32].main.temp * (9 / 5) - 459.67);
                let fahrenheit5 = f5.toString();





                let w1 = Math.round(result.list[0].wind.speed / .44704);
                let Windspeed1 = w1.toString();
                let w2 = Math.round(result.list[8].wind.speed / .44704);
                let Windspeed2 = w2.toString();
                let w3 = Math.round(result.list[16].wind.speed / .44704);
                let Windspeed3 = w3.toString();
                let w4 = Math.round(result.list[24].wind.speed / .44704);
                let Windspeed4 = w4.toString();
                let w5 = Math.round(result.list[32].wind.speed / .44704);
                let Windspeed5 = w5.toString();


                let t1 = (result.list[0].dt_txt)
                let t2 = (result.list[8].dt_txt)
                let t3 = (result.list[16].dt_txt)
                let t4 = (result.list[24].dt_txt)
                let t5 = (result.list[32].dt_txt)



                $('#location').html(result.city.name);
                
                
                $('#weather1').html(result.list[0].weather[0].description);
                $('#weather2').html(result.list[8].weather[0].description);
                $('#weather3').html(result.list[16].weather[0].description);
                $('#weather4').html(result.list[24].weather[0].description);
                $('#weather5').html(result.list[32].weather[0].description);

                
                
                
                $('#time1').html(t1);
                $('#time2').html(t2);
                $('#time3').html(t3);
                $('#time4').html(t4);
                $('#time5').html(t5);



                $('#temp1').html(fahrenheit1 + "°");
                $('#temp2').html(fahrenheit2 + "°");
                $('#temp3').html(fahrenheit3 + "°");
                $('#temp4').html(fahrenheit4 + "°");
                $('#temp5').html(fahrenheit5 + "°");




                $('#wind1').html("Wind is " + Windspeed1 + " mph")
                $('#wind2').html("Wind is " + Windspeed2 + " mph")
                $('#wind3').html("Wind is " + Windspeed3 + " mph")
                $('#wind4').html("Wind is " + Windspeed4 + " mph")
                $('#wind5').html("Wind is " + Windspeed5 + " mph")

                
            
                


            }
        })

    });

});