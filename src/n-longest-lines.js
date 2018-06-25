'use strict'
// Write a function that finds the N longest lines from an array of strings
// INPUT: 2, ["Hello world", "", "CodeEval", "Quick Fox", "A", "San Francisco"]
// OUTPUT: ["San Francisco", "Hello world"]

exports.nLongestLines = (n, array) => {
  if (!n || !Array.isArray(array) || array.length === 0) {
    return
  }
  if (n >= array.length) {
    return array
  }
  let ordered = array.sort((a, b) => {
    return b.length - a.length
  })
  return ordered.splice(0, n)
}
