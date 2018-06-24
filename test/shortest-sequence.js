import test from 'ava'
import target from '../src/shortest-sequence'

test.skip('shortest sequence - valid integer value', t => {
  var value = target.shortestSequence(1)
  t.deepEqual(value, [1])
  value = target.shortestSequence(2)
  t.deepEqual(value, [1,2])
  value = target.shortestSequence(6)
  t.deepEqual(value, [1,2,3,6])
  console.log(value)
  value = target.shortestSequence(18)
  t.deepEqual(value, [1,2,4,8,9,18])
  value = target.shortestSequence(33)
  t.deepEqual(value, [1,2,4,8,16,32,33])
  t.pass()
})