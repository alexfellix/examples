class Television {
  public button: string;

  constructor(button: string) {
    this.button = button;
  }

  powerOn() {
    return `Ele apertou o ${this.button} do controle, e ligou a TV`;
  }
}

const television = new Television('botão');

const result = television.powerOn();

console.log(result);
