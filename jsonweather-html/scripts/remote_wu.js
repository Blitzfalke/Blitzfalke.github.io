// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({

            url: "//api.wunderground.com/api/82d2eaccdbf9c22e/geolookup/conditions/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var location = data.location.city;
                var city = data.location.city;
                var state = data.location.state;
                var temp_f = data.current_observation.temp_f;
                var summary = data.current_observation.weather;
                var humidity = data.current_observation.relative_humidity;
                var winddir = data.current_observation.wind_dir;
                var windspeed = data.current_observation.wind_mph;
                var time = data.current_observation.observation_time_rfc822;
                
                $("#cityDisplay").prepend(city + " ," + state);
                $('title').prepend(city + " ," + state);
               $("#currentTemp").prepend(Math.round(temp_f)+"\u00B0F");
                $('#summary').text(toTitleCase(summary));
                $('#add1').text("Todays humidity is: " + humidity);
                $('#add2').text("todays wind direction is: " + winddir);
               $('#add3').text("Todays windspeed is: "  + windspeed + "mph");
                $('small').append(time);
                $("#cover").fadeOut(250);
            }
        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});
