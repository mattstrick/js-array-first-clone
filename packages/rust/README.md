# array-first (Rust)

> Get the first element or first n elements of a slice.

## Usage

```rust
use array_first::{first, first_n};

let slice = &[1, 2, 3, 4, 5];
first(slice);      // Some(&1)
first_n(slice, 3); // Some(vec![1, 2, 3])
```

## Build

```bash
cargo build
```

## License

MIT
