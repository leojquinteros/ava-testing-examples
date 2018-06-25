import test from 'ava'
import target from '../src/appearances'

test('appearances - valid values', t => {
  var value = target.appearances(1)
  t.is(value, 1)
  value = target.appearances(13)
  t.is(value, 6)
  value = target.appearances(60)
  t.is(value, 16)
  value = target.appearances(1000)
  t.is(value, 301)
  t.pass()
})

test('appearances - invalid values', t => {
  var value = target.appearances(0)
  t.is(value, undefined)
  value = target.appearances(undefined)
  t.is(value, undefined)
  value = target.appearances(9999)
  t.is(value, undefined)
  t.pass()
})
