const purespec = require('../..')

describe('Required matcher', function () {
  const name = 'purespec-hello'
  const subject = require('purespec-hello')
  const returns = new purespec.matchers.Returns('Hello, World!')
  const runnables = [returns]
  const required = new purespec.matchers.Required(name, ...runnables)

  describe('.prototype.constructor()', function () {
    it('returns a new Required with the given name and a required subject', function () {
      expect(required).toMatchObject({
        name,
        subject,
        runnables
      })
    })
  })
})
