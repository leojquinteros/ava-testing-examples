'use strict'
// Given positive integers A, B, and N, write a programs that prints integers from 1 to N.
// But for integers that are multiples of A, print "F", and for multiples of B, print "B".
// For integers wich are multiples of both A and B, print "FB".
// INPUT: 3 5 10 -> OUTPUT: 1 2 F 4 B F 7 8 F B

exports.multiples = (a, b, n) => {
  if (!a || !b || !n) return
  var result = ''
  for (let i = 1; i <= n; i++) {
    let multA = i % a === 0
    let multB = i % b === 0
    if (multA) {
      result = result + 'F'
    }
    if (multB) {
      result = result + 'B'
    }
    if (!multA && !multB) {
      result = result + i.toString()
    }
    if (i !== n) {
      result = result + ' '
    }
  }
  return result
}
