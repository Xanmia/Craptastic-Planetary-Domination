(function (window) {

    function Level(canvas) {
        this.background1 = new createjs.Bitmap(backgroundimg);
        this.planets = [];

        this.canvas = canvas
        this.canvas.addChild(this.background1);

        ab = new objectPloting(800,600,10,275,275,10,50);
        for (var x = 0; x < ab.length; x++){
            this.planets.push(new Planet(canvas, ab[x].x, ab[x].y, ab[x].width, ab[x].height, ab[x].scale));
        }

        this.planets[0].owner = "Player";
         
        this.Player = new Player(canvas, this);
     

    }

    Level.prototype.update = function () {
        for (var p = 0; p < this.planets.length; p++) {
            this.planets[p].update();
        }
        this.Player.update();

       // for (var i = 0; i < this.ships.length; i++) {
       //     this.ships[i].update();
       // }

    };

    window.Level = Level;

} (window));
