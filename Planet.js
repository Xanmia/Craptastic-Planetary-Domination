(function (window) {

    function Planet(canvas, x, y, width, height, scale) {
        this.canvas = canvas;
        this.populationSize = scale;//Math.round(((Math.random() * 50) + 10));
        this.x = Math.round(x + (width/2));
        this.y = Math.round(y + (height/2));
        this.owner;
        this.previousGrowth = 0;
        this.width = width;//275 * (.01 * this.populationSize);
        this.height = height;//275 * (.01 * this.populationSize);

        this.playerfilter = new createjs.ColorFilter(0,0,0,1, 0,0,255,0);

        this.sprite = new createjs.Bitmap(whitemoonimg);
        this.sprite.x = x;
        this.sprite.y = y;
        //this.sprite.filters = [this.playerfilter];
        this.sprite.scaleX = (.01 * this.populationSize);
        this.sprite.scaleY = (.01 * this.populationSize);

        this.sprite.onMouseOver = function(event) {
                    this.scaleX = this.scaleX * 1.02;
                    this.scaleY = this.scaleY * 1.02;
                }

        this.sprite.onMouseOut = function(event) {
                    this.scaleX = this.scaleX * 0.98;
                    this.scaleY = this.scaleY * 0.98;
                }
        this.canvas.addChild(this.sprite);


        this.txt = new createjs.Text(this.populationSize, "20px Arial", "#444");
        this.txt.textAlign = "center";
        this.txt.x = x + (this.width/2);
        this.txt.y = y + (this.height/2)-10;
        this.canvas.addChild(this.txt);
    }

    Planet.prototype.populate = function(owner)
    {
        if (this.owner != owner)
        {
            this.populationSize -= inhabitants;
        }
        else
        {
            this.populationSize += inhabitants;
        }
    }

    Planet.prototype.update = function () {
        //this.populationSize += 1;
        if(this.owner == "Player")
        {
            if(this.previousGrowth > this.populationSize){
                 this.populationSize +=1;
                 this.previousGrowth = 0;      
            }
            this.previousGrowth += 1;
            this.sprite.filters = [this.playerfilter];

        }
        this.txt.text = this.populationSize;
    };


    window.Planet = Planet;

}(window));

