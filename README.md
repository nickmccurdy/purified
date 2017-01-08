# Purified
[![Build Status](https://travis-ci.org/nickmccurdy/purified.svg?branch=master)](https://travis-ci.org/nickmccurdy/purified)
[![Coverage Status](https://coveralls.io/repos/github/nickmccurdy/purified/badge.svg?branch=master)](https://coveralls.io/github/nickmccurdy/purified?branch=master)
[![Dependency Status](https://david-dm.org/nickmccurdy/purified.svg)](https://david-dm.org/nickmccurdy/purified)
[![devDependency Status](https://david-dm.org/nickmccurdy/purified/dev-status.svg)](https://david-dm.org/nickmccurdy/purified/?type=dev)

A declarative test framework for pure JavaScript.

## [Example](./src/example.js)
This executable example is meant to showcase what purified tests will look like, and it also doubles as an integration test.

## Status
__Experimental.__ There is a unit test suite so it should be at least somewhat stable, but it may undergo frequent redesigns and API breakages.

## Development
1. Install [Node](https://nodejs.org/en/download/) 4 or later (preferred)
2. `npm install`
3. `npm test`

## Contributing
1. Use [JavaScript Standard Style](http://standardjs.com/). The test commands will run a compliant linter for you.
2. Keep compatability with the Node engine versions (see `package.json`).
3. Maintain test coverage for existing code and add at least partial unit tests for new code.
