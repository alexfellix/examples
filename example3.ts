class Mouse {
  public button: string;

  constructor(button: string) {
    this.button = button;
  }

  click() {
    return `Ele apertou o ${this.button} do mouse e entrou no jogo`;
  }
}

const mouse = new Mouse('botão');

const result = mouse.click();

console.log(result);