# array-first (Haskell)

> Get the first element or first n elements of a list.

## Usage

```haskell
import ArrayFirst

arrayFirst [1,2,3,4,5]     -- Just 1
arrayFirstN [1,2,3,4,5] 3  -- Just [1,2,3]
```

## Build

```bash
stack build
# or
cabal build
```

## License

MIT
