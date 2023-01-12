let num = 10;
let counter = 1;
let i = 1;

factorial: while (true) {
  counter *= i;
  i++;

  if(i === 11) {
    break factorial;
  }
}

console.log(counter);