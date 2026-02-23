"""
Core implementation for array-first.
"""


def first(arr, n=None):
    """
    Return the first element or first n elements of a list.

    Args:
        arr: A list (or sequence). Must be a list.
        n: Optional. If 1 or None, returns the first element. If an integer > 1,
           returns the first n elements as a list.

    Returns:
        If n is None or 1: the first element, or None if the list is empty.
        If n > 1: a list of the first n elements (or fewer if len(arr) < n).

    Raises:
        TypeError: If arr is not a list.
    """
    if not isinstance(arr, list):
        raise TypeError("array-first expects a list as the first argument.")

    if len(arr) == 0:
        return None

    if n is None:
        return arr[0]

    try:
        num = int(n)
    except (TypeError, ValueError):
        num = 1

    if num < 1:
        num = 1

    taken = arr[:num]
    if num == 1:
        return taken[0]
    return taken
