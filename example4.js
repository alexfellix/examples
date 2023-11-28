var Car = /** @class */ (function () {
    function Car(brake, cluch, accelerator) {
        this.brake = brake;
        this.cluch = cluch;
        this.accelerator = accelerator;
    }
    Car.prototype.pedals = function () {
        return "S\u00E3o tres pedais s\u00E3o eles ".concat(this.brake, ", ").concat(this.cluch, " e por ultimo ").concat(this.accelerator, " ");
    };
    return Car;
}());
var car = new Car('freio', 'embragem', 'acelerador');
var result = car.pedals();
console.log(result);
