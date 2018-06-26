import test from 'ava'
import target from '../src/well-formed-string'

test('well formed string - valid values', t => {
  var value = target.wellFormed('{}')
  t.true(value)
  value = target.wellFormed('({})')
  t.true(value)
  value = target.wellFormed('[[()]]')
  t.true(value)
  value = target.wellFormed(')')
  t.false(value)
  value = target.wellFormed('({')
  t.false(value)
  value = target.wellFormed('[[()]')
  t.false(value)
  t.pass()
})

test('well formed string - invalid value', t => {
  var value = target.wellFormed('')
  t.false(value)
  value = target.wellFormed(undefined)
  t.false(value)
  t.pass()
})
