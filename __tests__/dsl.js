var purespec = require('..')

describe('dsl', () => {
  describe('()', () => {
    var target = {}

    it('assigns properties to the given target', () => {
      purespec.dsl(target)
      expect(Object.keys(target)).not.toHaveLength(0)
    })
  })

  describe('.matchers()', () => {
    it('returns an Object of matcher shortcuts', () => {
      var matchers = Object.keys(purespec.matchers)
                           .map(key => purespec.matchers[key])
      var dslMatchers = purespec.dsl.matchers()
      expect(dslMatchers).toBeInstanceOf(Object)
      expect(Object.keys(dslMatchers)).not.toHaveLength(0)
      Object.keys(dslMatchers).forEach(key => {
        expect(matchers.some(matcher =>
          matcher === dslMatchers[key]().constructor)).toBeTruthy()
      })
    })
  })

  describe('.test()', () => {
    it('returns a new Test using the given constructor arguments', () => {
      var name = 'name'
      function subject () {}
      var given = new purespec.matchers.Given()
      var returns = new purespec.matchers.Returns()

      var test = new purespec.Test(name, subject, [given, returns])
      expect(purespec.dsl.test(name, subject, given, returns)).toEqual(test)
    })
  })
})