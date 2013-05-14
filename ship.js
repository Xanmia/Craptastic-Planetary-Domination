(function (window) {

    function Ship(canvas, planetdest) {

        this.canvas = canvas

        this.destX = planetdest.x;
        this.destY = planetdest.y;
        
        this.width = 20;
        this.height = 20;

        this.x = 0;
        this.y = 0;

        this.direction = {right:90, up:0, down:180, left: 270, upRight: 45, downRight: 135, downLeft: 225, upLeft: 315};
        //this.shape = new createjs.Shape();

        this.sprite = new createjs.Bitmap(shipimg);
      //  this.sprite.rotation = this.direction.downRight;  //right:90, up:0, down:180, left: 270, up/right: 45, down/right: 135, down/left: 225, up/left: 315
 
        this.canvas.addChild(this.sprite);

        
    }

    Ship.prototype.update = function () {
        if(this.sprite.x > this.destX){
            this.sprite.x -= 1; 
        }
        else if(this.sprite.x < this.destX)
        {
            this.sprite.x += 1;
        }
        if(this.sprite.y > this.destY){
            this.sprite.y -= 1; 
        }
        else if(this.sprite.y < this.destY)
        {
            this.sprite.y += 1;
        }

        if(this.sprite.x > this.destX && this.sprite.y > this.destY){
            this.sprite.rotation = this.direction.upLeft;
        }
        else if(this.sprite.x < this.destX && this.sprite.y < this.destY){
            this.sprite.rotation = this.direction.downRight;
        }
        else if(this.sprite.x > this.destX && this.sprite.y < this.destY){
            this.sprite.rotation = this.direction.upRight;
        }
        else if(this.sprite.x < this.destX && this.sprite.y > this.destY){
            this.sprite.rotation = this.direction.downLeft;
        }
        else if(this.sprite.x < this.destX && this.sprite.y == this.destY){
            this.sprite.rotation = this.direction.right;
            this.sprite.x += 1;

        }
        else if(this.sprite.x > this.destX && this.sprite.y == this.destY){
            this.sprite.rotation = this.direction.left;
            this.sprite.x -= 1;
        }
        else if(this.sprite.x == this.destX && this.sprite.y > this.destY){
            this.sprite.rotation = this.direction.up;
            this.sprite.y -= 1; 
        }
        else if(this.sprite.x == this.destX && this.sprite.y < this.destY){
            this.sprite.rotation = this.direction.down;
            this.sprite.y += 1;
        }

        this.x = this.sprite.x;
        this.y = this.sprite.y;
    };

    window.Ship = Ship;

} (window));