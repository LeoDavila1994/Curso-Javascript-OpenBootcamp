let num = 10;
let counter = 1;

for (let i = 1; i < num; i++) {
  counter *= i;

  console.log(counter);
}

/*
I    C       i       cr
1-   1   *   1    =  1
2-   1   *   2    =  2
3-   2   *   3    =  6
4-   6   *   4    =  24
5-   1   *   5    =  120
6-   1   *   6    =  720
7-   1   *   7    =  5040
8-   1   *   8    =  40320
9-   1   *   9    =  362880
10-  1   *   10   =  3628800

*/

