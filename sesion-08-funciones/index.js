let a = 5;
let b = 6;

function withoutParameters () {
  return a < b;
}

const myProm = new Promise((resolve, reject) => {
  if(true) {
    resolve();
  } else {
    reject()
  }
});

myProm
  .then(() => setTimeout(console.log("Hola soy una promesa"), 5000))
  .catch(() => console.log("ERROR"))
  .finally(() => console.log("Soy el finaly"))



