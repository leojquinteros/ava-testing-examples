'use strict'
// A positive integer N is given. The goal is to construct the shortest posible sequence 
// in integers ending with N, using the following rules:
// * The first element of the sequence is 1; more specifically: A[0] = 1
// * Each of the following element is generated by multiplying the previous element by 2 or
//    increasing it by 1; more precisely: A[i] = A[i-1] * 2 or A[i] = A[i-1] + 1, for i>=1
// INPUT: 18 -> OUTPUT: [1,2,4,8,9,18]

function sequence(n) {
  if (n == 0) {
      return 1;
  }
  if(Math.round(Math.random()) == 0) { // i dont know whether i should use 2*n or 1+n 
      return 2 * n;
  }
  return 1 + n;
}

function shortestSequenceLength(n) {
  var seq = [];
  var i = 0;
  var found = false;
  do {
      seq[i] = sequence(i);
      found = seq[i] == n;
      i++;
  } while (!found || i == 2147483647);
  
  return seq.length;
}

function solution(N) {
  if (N < 1 || N > 2147483647) {
      console.log("Invalid integer value");
      return;
  }
  return shortestSequenceLength(N);
}