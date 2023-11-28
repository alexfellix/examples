class Light {
  public lightSwitch: string;

  constructor(lightSwitch: string) {
    this.lightSwitch = lightSwitch;
  }

  powerOn() {
    return `Ele precionou o ${this.lightSwitch} e acendeu a luz`;
  }
}

const light = new Light('interruptor');

const result = light.powerOn();

console.log(result);