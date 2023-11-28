var Closet = /** @class */ (function () {
    function Closet(door, tshirt, shorts) {
        this.door = door;
        this.tshirt = tshirt;
        this.shorts = shorts;
    }
    Closet.prototype.open = function () {
        return "Ele abriu a ".concat(this.door, " e pegou ").concat(this.tshirt, " e ").concat(this.shorts);
    };
    return Closet;
}());
var closet = new Closet('porta', 'camiseta', 'shorts');
var result = closet.open();
console.log(result);
