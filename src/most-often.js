'use strict'
// Given an integer m and a zero-indexed array consisting of N non-negative integers, wich are
// not grater than m, return the value (or one of the values) that occurs most often in this array.
// INPUT: [1, 2, 3, 3, 1, 3, 1] -> OUTPUT: 1 or 3

exports.mostOfen = (m, arr) => {
    const length = arr.length
    let count = new Array(length)
    for (let i = 0; i < length; i++) {
      count[i] = 0
    }
    let maxOccurence = 1
    let index = 0
    for (let i = 0; i < length; i++) {
        if (count[arr[i]] > 0) {
            var tmp = count[arr[i]]
            if (tmp > maxOccurence) {
                maxOccurence = tmp
                index = i
            }
            count[arr[i]] = tmp + 1
        } else {
            count[arr[i]] = 1
        }
    }
    return arr[index]
}