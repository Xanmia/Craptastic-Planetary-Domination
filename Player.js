(function (window) {

    function Player(canvas, levels) {
        this.canvas = canvas

        this.initships = 1;
        this.ships = [];
        for (var p = 0; p < this.initships; p++) {
            this.ships.push(new Ship(this.canvas,levels.planets[0]));
        }
    }

    Player.prototype.update = function () {
        for (var i = 0; i < this.ships.length; i++) {
            this.ships[i].update();
        }
    };

window.Player = Player;

}(window));
