var Light = /** @class */ (function () {
    function Light(lightSwitch) {
        this.lightSwitch = lightSwitch;
    }
    Light.prototype.powerOn = function () {
        return "Ele precionou o ".concat(this.lightSwitch, " e acendeu a luz");
    };
    return Light;
}());
var light = new Light('interruptor');
var powerOn = light.powerOn();
console.log(powerOn);
