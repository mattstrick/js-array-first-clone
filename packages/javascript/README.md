# array-first

> Get the first element or first n elements of an array.

## Usage

```js
var first = require('array-first');

first(['a', 'b', 'c', 'd', 'e', 'f']);
//=> 'a'

first(['a', 'b', 'c', 'd', 'e', 'f'], 1);
//=> 'a'

first(['a', 'b', 'c', 'd', 'e', 'f'], 3);
//=> ['a', 'b', 'c']
```

## Related projects

- [array-last](https://github.com/jonschlinkert/array-last): Get the last or last n elements in an array.

## Running tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please create an issue.

## Author

**Jon Schlinkert**

- [github/jonschlinkert](https://github.com/jonschlinkert)
- [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

## License

Copyright © 2016 Jon Schlinkert. Released under the [MIT license](LICENSE).
