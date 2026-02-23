// Package arrayfirst returns the first element or first n elements of a slice.
// Go port of https://github.com/mattstrick/array-first-javascript
package arrayfirst

// First returns the first element of slice, and false if the slice is empty.
func First[T any](slice []T) (T, bool) {
	var zero T
	if len(slice) == 0 {
		return zero, false
	}
	return slice[0], true
}

// FirstN returns the first n elements. If n < 1 it is treated as 1.
// When n is 1, returns a single-element slice.
func FirstN[T any](slice []T, n int) ([]T, bool) {
	if len(slice) == 0 {
		return nil, false
	}
	if n < 1 {
		n = 1
	}
	if n > len(slice) {
		n = len(slice)
	}
	return slice[:n], true
}
