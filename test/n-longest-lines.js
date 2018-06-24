import test from 'ava'
import target from '../src/n-longest-lines'

test('n longest lines - valid values', t => {
  var value = target.nLongestLines(1, ["hello world"])
  t.deepEqual(value, ["hello world"])
  value = target.nLongestLines(2, ["Hello world", "", "Quick Fox", "A"])
  t.deepEqual(value, ["Hello world", "Quick Fox"])
  value = target.nLongestLines(2, ["Hello world", "", "VSCode", "Quick Fox", "A", "San Francisco"])
  t.deepEqual(value, ["San Francisco", "Hello world"])
  t.pass()
})

test('n longest lines - invalid values', t => {
  var value = target.nLongestLines(2, ["hello world"])
  t.deepEqual(value, ["hello world"])
  value = target.nLongestLines(undefined, ["hello world"])
  t.is(value, undefined)
  value = target.nLongestLines(1, [])
  t.is(value, undefined)
  value = target.nLongestLines(1, undefined)
  t.is(value, undefined)
  value = target.nLongestLines(undefined, undefined)
  t.is(value, undefined)
  t.pass()
})