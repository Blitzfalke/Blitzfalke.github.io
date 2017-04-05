//       <p id="input"></p>
//
//   
//            var text = '{"Entertainment": [' +
//                '{ "Title": "Brian Regan Stand-Up",' +
//                '"Type": "Comedy",' +
//                '"Length": 4: 09,' +
//                '}]}';
//
//            var obj = JSON.parse(text);
//            document.getElementById("input").innerHTML =
//                obj.Entertainment[1].Title + " " + obj.Entertainment[1].Type + " " + obj.Entertainment[1].Length;
//
//        

$(function () {

    console.log("test");
    $.getJSON( "../finial/finial.json", function(data) {
        console.log(data);
        console.log("test");
        var items = [];
        var cityName = "Rexburg";
        var city = data[cityName]['City'];
        var state = data[cityName]['State'];
        var zip = data[cityName]['zip']
        var partialstart = data[cityName]['PartialStart'];
        var totalstart = data[cityName]['TotalityStart'];
        var totallength = data[cityName]['TotalityLength'];

        $.each( data, function( key, val ) {
            items.push( "<li id='" + key["City"] + "'>" + val["State"] + "</li>" );
        });

        $('#cityname').append(city + ", " + state + " " + zip);
        $('#partialphasestart').append(partialstart);
        $('#totalitystart').append(totalstart);
        $('#totalitylength').append(totallength);


    });