/**
 * Dependencies
 */

const test = require('tape')
const add = require('..')

test('should add leading zero for group 4 bits', assert => {
  assert.plan(1)
  assert.equal(add('10111'), '00010111')
})

test('should not do anything if binary string is a module of 4', assert => {
  assert.plan(1)
  assert.equal(add('10110111'), '10110111')
})

test('should pass bits grouping', assert => {
  assert.plan(1)
  assert.equal(add('10111', 2), '010111')
})
