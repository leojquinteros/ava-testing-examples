import test from 'ava'
import target from '../src/multiples'

test('multiples - valid non-empty values', t => {
  var value = target.multiples(6, 9, 4)
  t.is(value, '1 2 3 4')
  value = target.multiples(1, 1, 3)
  t.is(value, 'FB FB FB')
  value = target.multiples(1, 2, 7)
  t.is(value, 'F FB F FB F FB F')
  value = target.multiples(3, 2, 6)
  t.is(value, '1 B F B 5 FB')
  value = target.multiples(3, 5, 10)
  t.is(value, '1 2 F 4 B F 7 8 F B')
  t.pass()
})

test('multiples - invalid values', t => {
  var value = target.multiples(0, 0, 10)
  t.is(value, undefined)
  value = target.multiples(undefined, 5, 10)
  t.is(value, undefined)
  value = target.multiples(3, 5, undefined)
  t.is(value, undefined)
  value = target.multiples(3, undefined, undefined)
  t.is(value, undefined)
  value = target.multiples(undefined, undefined, undefined)
  t.is(value, undefined)
  t.pass()
})
