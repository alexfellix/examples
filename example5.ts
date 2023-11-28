class Closet {
  public door: string;
  public tshirt: string;
  public shorts: string;


  constructor(door: string, tshirt: string, shorts: string) {
    this.door = door;
    this.tshirt = tshirt;
    this.shorts = shorts;
  }

  open() {
    return `Ele abriu a ${this.door} e pegou ${this.tshirt} e ${this.shorts}`;
  }
}

const closet = new Closet('porta', 'camiseta', 'shorts');

const result = closet.open();

console.log(result);