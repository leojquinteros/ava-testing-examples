'use strict'
// Given a string comprising just of the characters (,),[,],{,}
// determine if it is well-formed or not.
// 1.INPUT: () -> OUTPUT: true
// 2.INPUT: ([)] -> OUTPUT: false

const values = new Map([['}', '{'], [')', '('], [']', '[']])
const reverseString = (str) => {
  if (!str) return ''
  let arr = str.split('')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let value = values.get(arr[i])
    result.push(value || '')
  }
  return result.reverse().join('')
}

exports.wellFormed = (str) => {
  if (!str || str.length % 2 !== 0) return false
  let s1 = str.slice(0, str.length / 2)
  let s2 = str.slice(str.length / 2, str.length)
  return (s1 === reverseString(s2))
}
