var circles = []
        
        function onKeyDown(event) {
            var maxSize = new Point(view.size.width, view.size.height);
            var randomNum = Point.random();
            var points = maxSize * randomNum;
            var myCircle = new Path.Circle(new Point(points), 50);
            myCircle.fillColor = 'red';
            circles.push(myCircle);
            console.log(circles);
        };

        for (var i = 0; i < circles.length(); i++) {
            circles[i].fillColor.hue += 1;
        }