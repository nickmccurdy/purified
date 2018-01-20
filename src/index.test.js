const _ = require('lodash/fp')
const Given = require('./matchers/Given')
const Returns = require('./matchers/Returns')
const Test = require('./matchers/Test')
const matchers = require('./matchers')
const purespec = require('.')

describe('PureSpec', () => {
  describe('dsl', () => {
    it('is a non-empty Object', () => {
      expect(purespec.dsl).toBeInstanceOf(Object)
      expect(purespec.dsl).not.toEqual({})
    })

    it('includes matcher shortcuts', () => {
      _.forEach(purespec.dsl)(dslMatcher => {
        expect(_.values(matchers)).toContain(dslMatcher().constructor)
      })
    })
  })

  describe('load()', () => {
    it('returns tests loaded from the given PureSpec module', () => {
      const actual = purespec.load('examples/round.js')

      expect(actual).toBeInstanceOf(Test)
      expect(_.isFunction(actual.subject)).toBeTruthy()
      expect(actual.runnables).toEqual([
        new Given(1, new Returns(1)),
        new Given(1.5, new Returns(2))
      ])
    })
  })
})