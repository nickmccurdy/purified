const ComparisonResult = require('../results/ComparisonResult')
const Result = require('../results/Result')
const Returns = require('./Returns')

describe('Returns matcher', () => {
  const returns = new Returns('Hello, World!')

  describe('.prototype.constructor()', () => {
    it('returns a new Returns with the given result', () => {
      expect(returns.result).toBe('Hello, World!')
    })
  })

  describe('.prototype.run()', () => {
    describe('given subject that throws', () => {
      it('returns a failing result', () => {
        const subject = () => { throw new Error('Missing name') }

        expect(returns.run(subject)).toEqual(new Result(returns, new Error('Missing name')))
      })
    })

    describe('given subject that returns', () => {
      it('asserts its subject\'s return value to equal its result', () => {
        const subject = () => 'Hello, World!'

        expect(returns.run(subject)).toEqual(new ComparisonResult(
          returns,
          'Hello, World!',
          'Hello, World!'
        ))
      })
    })
  })

  describe('.prototype.toString()', () => {
    it('returns a String representation with its result', () => {
      expect(returns.toString()).toBe('returns Hello, World!')
    })
  })
})
