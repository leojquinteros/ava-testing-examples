'use strict'
// Given an integer M and a zero-indexed array A consisting of N non-negative integers,
// wich are not grater than M, return the value (or one of the values) that occurs most often 
// in this array. 
// INPUT: [1, 2, 3, 3, 1, 3, 1] -> OUTPUT: 1 or 3

module.exports.mostOfen = (M, A) => {
    var N = A.length
    var count = new Array(N)
    var i
    for (i = 0; i < N; i++)
        count[i] = 0
    var maxOccurence = 1
    var index = 0
    for (i = 0; i < N; i++) {
        if (count[A[i]] > 0) {
            var tmp = count[A[i]]
            if (tmp > maxOccurence) {
                maxOccurence = tmp
                index = i
            }
            count[A[i]] = tmp + 1
        } else {
            count[A[i]] = 1
        }
    }
    return A[index]
}