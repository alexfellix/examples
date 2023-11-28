class Car {
  public brake: string;
  public cluch: string;
  public accelerator: string;

  constructor(brake: string, cluch: string, accelerator: string) {
    this.brake = brake;
    this.cluch = cluch;
    this.accelerator = accelerator;
  }

  pedals() {
    return `São tres pedais são eles ${this.brake}, ${this.cluch} e por ultimo ${this.accelerator} `;
  }
}

const car = new Car('freio', 'embragem', 'acelerador');

const result = car.pedals();

console.log(result);