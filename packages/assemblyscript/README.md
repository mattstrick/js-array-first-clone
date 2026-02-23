# array-first (AssemblyScript)

> Get the first element or first n elements of an array.

AssemblyScript/WebAssembly build target — compiles to WASM and is callable from JavaScript via the loader. Works with `Int32Array` for numeric arrays.

## Usage from JavaScript

```js
const loader = require("@assemblyscript/loader");
const fs = require("fs");

const wasm = await loader.instantiate(fs.readFileSync("build/release.wasm"));
const { exports } = wasm;
const { __pin, __unpin, __newArray, __getArray } = exports;

// Create array and get first element
const arr = __pin(__newArray(exports.Int32Array_ID, [10, 20, 30]));
const first = exports.firstElement(arr);
__unpin(arr);
// first === 10

// Get first n elements
const arr2 = __pin(__newArray(exports.Int32Array_ID, [1, 2, 3, 4, 5]));
const first3 = __pin(exports.firstN(arr2, 3));
__unpin(arr2);
const result = __getArray(first3);
__unpin(first3);
// result === [1, 2, 3]
```

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Note

This build target works with `Int32Array` for numeric arrays. For generic arrays (strings, objects, mixed types), use the JavaScript or TypeScript build targets.

## License

MIT
