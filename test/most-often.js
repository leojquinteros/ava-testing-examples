import test from 'ava'
import assert from 'assert'
import target from '../src/most-often'

test('most often - valid non-empty values', t => {
  var value = target.mostOfen(1, [1])
  t.is(value, 1)
  value = target.mostOfen(2, [2, 2, 0])
  t.is(value, 2)
  value = target.mostOfen(7, [7, 0, 4, 4, 4, 1])
  t.is(value, 4)
  value = target.mostOfen(3, [1, 2, 3, 3, 1, 3, 1])
  assert(value === 1 || value === 3)
  t.pass()
})

test('most often - empty values', t => {
  const value = target.mostOfen(5, [])
  t.is(value, undefined)
  t.pass()
})