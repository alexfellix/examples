class World {
  public sat: string;

  constructor(sat: string){
  this.sat = sat;
  }
   
  seat() {
    return `Ele ${this.sat} na cadeira.`;
  }
  do(something : string) {
    const array = ['run', 'sleep', 'walk']

    array.forEach(element => {
      if(something === element) {
        console.log(element)
      }
    });
  }
}




const world = new World('sentou')

const result = world.seat()

const loop = world.do('run')

console.log(loop);

console.log(result);


