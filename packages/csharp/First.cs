namespace ArrayFirst;

/// <summary>
/// Get the first element or first n elements of a list.
/// C# port of https://github.com/mattstrick/array-first-javascript
/// </summary>
public static class First
{
    /// <summary>
    /// Returns the first element, or null if the list is empty.
    /// </summary>
    public static T? ArrayFirst<T>(IList<T>? arr)
    {
        if (arr == null)
            throw new ArgumentException("array-first expects a list as the first argument.");
        if (arr.Count == 0)
            return default;
        return arr[0];
    }

    /// <summary>
    /// Returns the first element if n is 1, otherwise the first n elements.
    /// </summary>
    public static object? ArrayFirst<T>(IList<T>? arr, int n)
    {
        if (arr == null)
            throw new ArgumentException("array-first expects a list as the first argument.");
        if (arr.Count == 0)
            return null;
        var take = n < 1 ? 1 : n;
        var slice = arr.Take(take).ToList();
        if (take == 1)
            return slice[0];
        return slice;
    }
}
