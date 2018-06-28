import test from 'ava'
import target from '../src/middle'

test('middle - valid values', t => {
  var value = target.getMiddle('test')
  t.is(value, 'es')
  value = target.getMiddle('testing')
  t.is(value, 't')
  value = target.getMiddle('middle')
  t.is(value, 'dd')
  value = target.getMiddle('A')
  t.is(value, 'A')
  t.pass()
})

test('middle - invalid values', t => {
  var value = target.getMiddle('')
  t.is(value, undefined)
  value = target.getMiddle()
  t.is(value, undefined)
  value = target.getMiddle(null)
  t.is(value, undefined)
  t.pass()
})
