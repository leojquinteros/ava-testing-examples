'use strict'
// Return the number of times the number 1 appears in a sequence from 1 to a given n [1..1000]
// INPUT: [1,2,3,4,5,6,7,8,9,10,11] -> OUTPUT: 4

exports.appearances = (n) => {
  if (!n || n < 1 || n > 1000) {
    return
  }
  const valueToCheck = '1'
  let amount = 0
  let digits = 0
  for (let i = 1; i <= n; i++) {
    digits = i.toString()
    amount = amount + digits.split(valueToCheck).length - 1
  }
  return amount
}
