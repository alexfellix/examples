class Shoes {
  shoe(shoe_lace : string) {
    const array = ['lace']

  array.forEach(element => {
    if(shoe_lace === element) {
      console.log(element)
    }
  });
  }
}