/**
 * Get the first element or first n elements of an array.
 * TypeScript port of array-first (JavaScript).
 */

/**
 * Returns the first element or first n elements of an array.
 * @param arr - The input array
 * @param num - Optional. If 1 or omitted, returns the first element. If > 1, returns the first n elements.
 * @returns The first element, first n elements, or null if empty
 */
export function first<T>(arr: T[], num?: number): T | T[] | null {
  if (!Array.isArray(arr)) {
    throw new Error("array-first expects an array as the first argument.");
  }
  if (arr.length === 0) {
    return null;
  }
  const n = num != null && Number(num) >= 1 ? Number(num) : 1;
  const slice = arr.slice(0, n);
  if (n === 1) {
    return slice[0];
  }
  return slice;
}
