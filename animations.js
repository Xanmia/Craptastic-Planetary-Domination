(function (window) {

    function Animation(canvas) {
        this.stage = canvas;

}

    Animation.prototype.Explode = function (x, y) {
        var ss = new createjs.SpriteSheet({
            "animations":
            {
                "run": [0, 10, false]//,
                //  "jump": [26, 63, "run"]
            },
            "images": ["images/ExplosionAnimationClear.png"],
            "frames":
                {
                    "height": 150,
                    "width": 150,
                    "regX": 0,
                    "regY": 0,
                    "count": 11
                }
        });

        var grant = new createjs.BitmapAnimation(ss);
        grant.x = x;
        grant.y = y;
        grant.gotoAndPlay("run");

        this.stage.addChild(grant);
    }


    Animation.prototype.ShipDown = function (x, y) {
        var ss = new createjs.SpriteSheet({
            "animations":
            {
                "run": [0, 10, false]//,
                //  "jump": [26, 63, "run"]
            },
            "images": ["images/ExplosionAnimationClear.png"],
            "frames":
                {
                    "height": 150,
                    "width": 150,
                    "regX": 0,
                    "regY": 0,
                    "count": 11
                }
        });

        var grant = new createjs.BitmapAnimation(ss);
        grant.x = x;
        grant.y = y;
        grant.gotoAndPlay("run");

        this.stage.addChild(grant);
    }

    Animation.prototype.ShipUp = function (x, y) {
        var ss = new createjs.SpriteSheet({
            "animations":
            {
                "run": [0, 10, false]//,
                //  "jump": [26, 63, "run"]
            },
            "images": ["images/ExplosionAnimationClear.png"],
            "frames":
                {
                    "height": 150,
                    "width": 150,
                    "regX": 0,
                    "regY": 0,
                    "count": 11
                }
        });

        var grant = new createjs.BitmapAnimation(ss);
        grant.x = x;
        grant.y = y;
        grant.gotoAndPlay("run");

        this.stage.addChild(grant);
    }

    Animation.prototype.ShipNormal = function (x, y) {
        var ss = new createjs.SpriteSheet({
            "animations":
            {
                "run": [0, 1, true]//,
                //  "jump": [26, 63, "run"]
            },
            "images": [playershipimg],
            "frames":
                {
                    "height": 74,
                    "width": 60,
                    "regX": 0,
                    "regY": 0,
                    "count": 1
                }
        });

        var grant = new createjs.BitmapAnimation(ss);
        grant.x = x;
        grant.y = y;
        grant.gotoAndPlay("run");

        this.stage.addChild(grant);
    }

    window.Animation = Animation;

}(window));