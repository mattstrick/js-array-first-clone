/// Get the first element or first n elements of an array.
/// Swift port of https://github.com/mattstrick/array-first-javascript
public enum ArrayFirst {
    /// Returns the first element, or nil if the array is empty.
    public static func first<T>(_ array: [T]) -> T? {
        array.first
    }

    /// Returns the first n elements. If n < 1, treated as 1. Returns nil if array is empty.
    public static func first<T>(_ array: [T], n: Int) -> [T]? {
        guard !array.isEmpty else { return nil }
        let take = max(1, n)
        return Array(array.prefix(take))
    }
}
