var Tv = /** @class */ (function () {
    function Tv(button) {
        this.button = button;
    }
    Tv.prototype.powerOn = function () {
        return "Ele apertou o ".concat(this.button, " do controle, e ligou a TV");
    };
    return Tv;
}());
var tv = new Tv('botão');
var powerOn = tv.powerOn();
console.log(powerOn);
