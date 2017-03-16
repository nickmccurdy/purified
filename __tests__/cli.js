console.log = jest.fn()
var path = require('path')

describe('CLI', () => {
  var cli = '../src/cli'

  beforeEach(() => {
    jest.resetAllMocks().resetModules()
    process.argv = [
      process.execPath,
      path.resolve(cli),
      'example.js'
    ]
  })

  describe('given a valid module', () => {
    it('prints its results', () => {
      return require(cli)
        .then(() => expect(console.log).toHaveBeenCalled())
    })
  })

  describe('given multiple valid modules', () => {
    it('prints their results', () => {
      process.argv[3] = 'example.js'

      return require(cli)
        .then(() => expect(console.log).toHaveBeenCalledTimes(2))
    })
  })

  describe('given an invalid module', () => {
    it('throws an error', () => {
      process.argv[2] = ''

      expect(() => require(cli)).toThrow()
    })
  })
})
