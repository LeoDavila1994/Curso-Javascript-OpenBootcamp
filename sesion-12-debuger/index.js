let num = 6;
let arr = [0,1];
let x = 1;

const fibonacci = (limit) => {

  x++;
  arr.push(arr[arr.length -2] + arr[arr.length - 1]);

  if (x === limit){
    return arr;
  }

  fibonacci(num);
};

fibonacci();

console.log(arr);


