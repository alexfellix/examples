var World = /** @class */ (function () {
    function World(sat) {
        this.sat = sat;
    }
    World.prototype.seat = function () {
        return "Ele ".concat(this.sat, " na cadeira.");
    };
    World.prototype.do = function (something) {
        var array = ['run', 'sleep', 'walk'];
        array.forEach(function (element) {
            if (something === element) {
                console.log(element);
            }
        });
    };
    return World;
}());
var world = new World('sentou');
var result = world.seat();
var loop = world.do('run');
console.log(loop);
console.log(result);
