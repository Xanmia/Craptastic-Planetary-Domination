(function (window) {

    function SplashScreen(canvas) {
        this.canvas = canvas;
        this.container = new createjs.Container();
    }

    SplashScreen.prototype.update = function () {
        if (keydown.space) {
            this.canvas.removeChild(this.container);  //drop title, start count down
            this.container.removeAllChildren();
            startPlaying();
        }
    };

    SplashScreen.prototype.setTitleScreen = function () {
        //sky = new createjs.Shape();
       // sky.graphics.beginLinearGradientFill(["#204", "#003", "#000"], [0, 0.15, 0.6], 0, CANVAS_HEIGHT, 0, 0);
       // sky.graphics.drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        background = new createjs.Bitmap(backgroundimg);


        background1 = new createjs.Bitmap(titlescreenimg); 
        background1.x = CANVAS_WIDTH / 5;
        background1.y = CANVAS_HEIGHT / 5;
        this.container.addChild(background);
        this.container.addChild(background1);
        this.canvas.addChild(this.container);
    };


    SplashScreen.prototype.setLoseScreen = function () {
        txt = new createjs.Text("This game is crap and you're crap at it. \n\n Press space to try again.", "36px Arial", "#ebebeb");
        txt.textAlign = "center";
        txt.x = CANVAS_WIDTH/2;
        txt.y = CANVAS_HEIGHT/3;
        this.container.addChild(txt);
        this.canvas.addChild(this.container);
    };

    SplashScreen.prototype.setnextLevelScreen = function () {
        txt = new createjs.Text("You're still playing this craptastic game?\n\n Press Space for the next level.", "36px Arial", "#ebebeb");
        txt.textAlign = "center";
        txt.x = CANVAS_WIDTH / 2;
        txt.y = CANVAS_HEIGHT / 3;
        this.container.addChild(txt);
        this.canvas.addChild(this.container);

    };

    window.SplashScreen = SplashScreen;

} (window));
