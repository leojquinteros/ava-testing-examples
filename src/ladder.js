/*
* You have a ladder of N steps (rungs). You can go up the ladder by taking either
*  1 step or 2 steps at a time, in any combination.
* How many different routes are there (combinations of 1 steps or 2 steps) to make it up the ladder?
*
* FIBONACCI
* 0 -> 1
* 1 -> 1
* 2 -> 11-2 = 2
* 3 -> 111-12-2-1 = 3
* 4 -> 1111-112-121-211-22 = 5
* 5 -> 11111-1112-1121-1211-122-2111-221-212 = 8
*/

exports.getCombinations = (number) => {
  if (!number) return 0
  let amount = 1
  let fb = 0
  let temp
  while (number >= 0) {
    temp = amount
    amount = amount + fb
    fb = temp
    number--
  }
  return fb
}
