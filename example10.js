var Shoes = /** @class */ (function () {
    function Shoes() {
    }
    Shoes.prototype.shoes = function (shoe_lace) {
        var array = ['lace'];
        array.forEach(function (element) {
            if (shoe_lace === element) {
                console.log(element);
            }
        });
    };
    return Shoes;
}());
