/*
You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

Input
A word (string) of length 0 < str < 1000

Output
The middle character(s) of the word represented as a string.
*/

exports.getMiddle = (str) => {
  if (!str || str.length >= 1000) return
  if (str.length === 1) return str
  let result = ''
  let str1 = str.slice(0, str.length / 2)
  let str2 = str.slice(str.length / 2, str.length)
  if (str.length % 2 === 0) {
    result = str1[str1.length - 1] + str2[0]
  } else {
    result = str2[0]
  }
  return result
}
