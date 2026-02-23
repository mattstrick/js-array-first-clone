# array-first (Swift)

> Get the first element or first n elements of an array.

## Usage

```swift
import ArrayFirst

let arr = [1, 2, 3, 4, 5]
ArrayFirst.first(arr)       // Optional(1)
ArrayFirst.first(arr, n: 3) // Optional([1, 2, 3])
```

## Build

```bash
swift build
```

## License

MIT
