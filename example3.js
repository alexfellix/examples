var Mouse = /** @class */ (function () {
    function Mouse(button) {
        this.button = button;
    }
    Mouse.prototype.click = function () {
        return "Ele apertou o ".concat(this.button, " do mouse e entrou no jogo");
    };
    return Mouse;
}());
var mouse = new Mouse('botão');
var click = mouse.click();
console.log(click);
