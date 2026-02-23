# array-first (TypeScript)

> Get the first element or first n elements of an array.

TypeScript build target — compiles to JavaScript and is fully interoperable with the JS ecosystem.

## Usage

```ts
import { first } from "array-first";

first(["a", "b", "c", "d", "e", "f"]);
//=> 'a'

first(["a", "b", "c", "d", "e", "f"], 1);
//=> 'a'

first(["a", "b", "c", "d", "e", "f"], 3);
//=> ['a', 'b', 'c']
```

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## License

MIT
