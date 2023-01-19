export function suma (a, b){
  return a + b;
};

export function resta (a, b){
  return a - b;
};

export function multiplica (a, b){
  return a * b;
};

export function divide (a, b){
  return a / b;
};

export function eleva (a, b){
  return a ** b;
};

export function factoriza ( a ){
  let factorial = 1;

  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }

  return factorial;
};