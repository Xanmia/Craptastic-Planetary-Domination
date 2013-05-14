function objectPloting(areaWidth, areaHeight, totalObjects, objectWidth, objectHeight, minScale, maxScale) {

    var Planets = [];
    var screenWidth = areaWidth;
    var screenHeight = areaHeight;

    var attempts = 0;

    Begin(totalObjects);

    function Begin(totalPlanets)
    {
        tx = 0;
        while (tx < totalPlanets)
        {
            cScale = Math.round(((Math.random() * maxScale) + minScale));
            FindOpenLocation(objectWidth * (.01 * cScale), objectHeight * (.01 * cScale), cScale);
            tx+= 1;
        }
    }


    function FindOpenLocation(width, height, scale)
    {
        var success = false;

        while(!success)
        {
            tryX = Math.round(Math.random() * (screenWidth-width-1));
            tryY = Math.round(Math.random() * (screenHeight-height-1));

            success = checkAvailability(tryX, tryY, width, height, scale);
            if (attempts> 350){
                success = true;
            }
            attempts += 1; 
        }

    }

    function checkAvailability(_x, _y, _width, _height, _scale)
    {       
        if (Planets.length == 0)
        {
           if((_x + _width) < screenWidth && (_y + _height) < screenHeight)
            {
                Planets.push({x: _x, y: _y, width: _width, height: _height, scale: _scale});
                return true;
            }
        }
        else{
            for (var p = 0; p < Planets.length; p++) 
            {
                propXwWidth = _x + _width;
                propYwHeight = _y + _height;
                currentXwWidth = Planets[p].x + Planets[p].width;
                currentYwHeight = Planets[p].y + Planets[p].height;

                if ((_x >= Planets[p].x && _x < currentXwWidth) || (propXwWidth > Planets[p].x && propXwWidth <= currentXwWidth)) {
                    if ((_y >=Planets[p].y && _y < currentYwHeight) || (propYwHeight > Planets[p].y && propYwHeight <= currentYwHeight)){
                        return false;
                    }
                }
            }
        }
        Planets.push({x: _x, y: _y, width: _width, height: _height, scale: _scale});
        return true;
    }

    return Planets;
}