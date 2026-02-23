/**
 * array-first (AssemblyScript)
 *
 * Get the first element or first n elements of an Int32Array.
 * WebAssembly build — callable from JavaScript via the loader.
 *
 * Note: Works with Int32Array for numeric arrays. For generic arrays, use the
 * JavaScript or TypeScript build targets.
 */

/** Returns the first element of an Int32Array. Throws if empty. */
export function firstElement(arr: Int32Array): i32 {
  if (arr.length === 0) {
    throw new Error("array-first expects a non-empty array");
  }
  return unchecked(arr[0]);
}

/** Required for loader to create Int32Array from JavaScript. */
export const Int32Array_ID = idof<Int32Array>();

/** Returns the first n elements as a new Int32Array. */
export function firstN(arr: Int32Array, n: i32): Int32Array {
  if (arr.length === 0) {
    return new Int32Array(0);
  }
  const count = n < 1 ? 1 : (n > arr.length ? arr.length : n);
  const result = new Int32Array(count);
  for (let i = 0; i < count; i++) {
    unchecked((result as Int32Array)[i] = unchecked(arr[i]));
  }
  return result;
}
