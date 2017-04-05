       <p id="input"></p>

        <script>
            var text = '{"Entertainment": [' +
                '{ "Title": "Brian Regan Stand-Up",' +
                '"Type": "Comedy",' +
                '"Length": 4: 09,' +
                '}]}';

            var obj = JSON.parse(text);
            document.getElementById("input").innerHTML =
                obj.Entertainment[1].Title + " " + obj.Entertainment[1].Type + " " + obj.Entertainment[1].Length;

        </script>