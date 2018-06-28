import test from 'ava'
import target from '../src/ladder'

test('ladder - valid values', t => {
  var value = target.getCombinations(1)
  t.is(value, 1)
  value = target.getCombinations(2)
  t.is(value, 2)
  value = target.getCombinations(3)
  t.is(value, 3)
  value = target.getCombinations(4)
  t.is(value, 5)
  value = target.getCombinations(5)
  t.is(value, 8)
  t.pass()
})

test('ladder - invalid values', t => {
  var value = target.getCombinations()
  t.is(value, 0)
  value = target.getCombinations(0)
  t.is(value, 0)
  value = target.getCombinations(-2)
  t.is(value, 0)
  value = target.getCombinations(null)
  t.is(value, 0)
  t.pass()
})
