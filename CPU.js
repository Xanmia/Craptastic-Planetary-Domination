(function (window) {

    function CPU(canvas, x, y, speed) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;

        this.y = this.y.clamp(0, window.CANVAS_HEIGHT - this.height);

        this.sprite = new createjs.Bitmap(enemyshipimg);
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.canvas.addChild(this.sprite);

        this.projectiles = [];

        this.animation;

        this.active = true;
        this.shipactive = true;

        this.speed = speed;
        this.previousShot = 0;
        this.reloadTime = ((Math.random() * 50) + 20);


        this.midpoint = function () {
            return {
                X: this.x - this.width / 2,
                Y: this.y + this.height / 2
            };
        };
    }

    CPU.prototype.explode = function () {
        this.animation = new Animation(this.canvas);
        this.animation.Explode(this.x-50, this.y-50);  ///-50 because the alignment is f'ed up for some reason
        this.canvas.removeChild(this.sprite);

        if (this.projectiles.length == 0) {
            this.active = false;
        }
        else {
            this.y = -1000;  ///put off screen until there projectile is gone
        }
    };

    CPU.prototype.update = function () {
        this.x -= this.speed;

        this.sprite.x = this.x;

        if (this.x < -this.width || this.y < 0 && this.projectiles.length == 0)  {
            this.active = false;
            this.canvas.removeChild(this.sprite);
        }

        for (var i = 0; i < this.projectiles.length; i++) {
            if (collides(this.projectiles[i], window.level.player)) {
                window.level.player.hit();
                this.projectiles[i].dispose();
            }

            if (this.projectiles[i].active == true) {
                this.projectiles[i].update();
            }
            else {
                this.projectiles[i].dispose();
                this.projectiles.splice(i, 1);
                
            }
        }

        if (window.TIME_PASSED - this.previousShot > this.reloadTime && this.shipactive == true) {
            var bulletPosition = this.midpoint();
            this.projectiles.push(new Projectile(this.canvas, bulletPosition.X, bulletPosition.Y, -20));
            this.previousShot = window.TIME_PASSED;
        }
    };


window.CPU = CPU;

}(window));

