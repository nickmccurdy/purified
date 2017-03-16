var purespec = require('../..')

describe('Returns matcher', () => {
  var returns = new purespec.matchers.Returns('Hello, World!')

  describe('.prototype.constructor()', () => {
    it('returns a new Returns with the given result', () => {
      expect(returns.result).toBe('Hello, World!')
    })
  })

  describe('.prototype.run()', () => {
    it('asserts its subject\'s return value to equal its result', () => {
      var subject = () => 'Hello, World!'

      expect(returns.run(subject)).toEqual(new purespec.Result(returns, {
        actual: 'Hello, World!',
        expected: 'Hello, World!'
      }))
    })
  })

  describe('.prototype.toString()', () => {
    it('returns a String representation with its result', () => {
      expect(returns.toString()).toBe('returns Hello, World!')
    })
  })
})
