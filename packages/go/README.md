# array-first (Go)

> Get the first element or first n elements of a slice.

## Usage

```go
import "array-first"

arr := []int{1, 2, 3, 4, 5}
first, ok := arrayfirst.First(arr)       // 1, true
firstN, ok := arrayfirst.FirstN(arr, 3) // [1, 2, 3], true
```

## Build

```bash
go build ./...
```

## License

MIT
