describe('Rejects matcher', () => {
  var rejects = new purespec.matchers.Rejects('Missing name')

  describe('.prototype.constructor()', () => {
    it('returns a new Rejects with the given reason', () => {
      expect(rejects.reason).toBe('Missing name')
    })
  })

  describe('.prototype.run()', () => {
    describe('given a subject that rejects with a String', () => {
      it('runs its subject as a Promise, asserting a rejection with the given reason')
    })

    describe('given a subject that rejects with an Error', () => {
      it('runs its subject as a Promise, asserting a rejection with the given reason', () => {
        return rejects.run(example.hello.promise).then(result => {
          expect(result).toEqual(new purespec.Result(rejects, {
            actual: new Error('Missing name'),
            expected: new Error('Missing name')
          }))
        })
      })
    })

    describe('given a subject that resolves', () => {
      it('runs its subject as a Promise, failing to assert a rejection with the given reason')
    })
  })

  describe('.prototype.toString()', () => {
    it('returns a String representation with its reason', () => {
      expect(rejects.toString()).toBe('rejects with Missing name')
    })
  })
})
