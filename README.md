This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# Zerodroid

## Task
Implement a function **zerodroid**, given a natural number `n` in a base `b`, detects the trailing zeros of its factorial *without computing it*!

### Example
```js
zerodroid(5, 10) // 1 because  5! = 5 * 4 * 3 * 2 * 1 = 120
zerodroid(6, 3)  // 2 because  6! = 6 * 5 * 4 * 3 * 2 * 1 = 720 = 222200(3)
zerodroid(12, 8) // 3 because 12! = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 479001600 = 3443176000(8)
```

### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **zerodroid branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
  }
```
