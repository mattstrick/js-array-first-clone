//! Get the first element or first n elements of a slice.
//! Rust port of https://github.com/mattstrick/array-first-javascript

/// Returns the first element of the slice, or None if empty.
pub fn first<T>(slice: &[T]) -> Option<&T> {
    slice.first()
}

/// Returns the first n elements. If n < 1, treated as 1.
pub fn first_n<T: Clone>(slice: &[T], n: usize) -> Option<Vec<T>> {
    if slice.is_empty() {
        return None;
    }
    let take = n.max(1).min(slice.len());
    Some(slice[..take].to_vec())
}
