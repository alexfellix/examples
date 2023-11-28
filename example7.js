var WindowHome = /** @class */ (function () {
    function WindowHome(key, lock, window) {
        this.key = key;
        this.lock = lock;
        this.window = window;
    }
    WindowHome.prototype.open = function () {
        return "Ele usou a ".concat(this.key, " para destravar o ").concat(this.lock, " e abrir a ").concat(this.window);
    };
    return WindowHome;
}());
var windowHome = new WindowHome('chave', 'cadeado', 'janela');
var result = windowHome.open();
console.log(result);
