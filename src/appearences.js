'use strict'
// Cantidad de veces que aparece el numero 1 en la secuencia de 1 a N
// INPUT: [1,2,3,4,5,6,7,8,9,10,11] -> OUTPUT: 4
function solution(N) {
  const valueToCheck = "1";
  if (N < 0 || N >= 100000) {
      console.log("Invalid integer value");
      return;
  }
  let amount = 0;
  let digits = 0;
  for (i =1; i <= N; i++) {
      digits = i.toString();
      amount = amount + digits.split(valueToCheck).length-1;
  }
  return amount;
}