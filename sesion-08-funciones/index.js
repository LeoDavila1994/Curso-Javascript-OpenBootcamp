
function withoutParameters () {
  return true;
}

function promes() {
  return setTimeout(()=> console.log("Hola soy una promesa"), 5000)
}

function* parIdGenerator() {
  let id = 0;
  while (true) {
    yield id += 2;
  }
}

const gen = parIdGenerator();

console.log(gen.next().value);
console.log(gen.next());



