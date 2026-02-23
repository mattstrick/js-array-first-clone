package com.mattstrick.arrayfirst

/**
 * array-first (Kotlin)
 *
 * Get the first element or first n elements of a list.
 * Kotlin port of https://github.com/mattstrick/array-first-javascript
 *
 * License: MIT
 */

/**
 * Returns the first element of the list, or `null` if the list is empty.
 */
fun <T> first(list: List<T>): T? = list.firstOrNull()

/**
 * Returns the first [n] elements of the list.
 * When n is 1, returns a single-element list (use [first(List)] for a single element as [T]?).
 *
 * @param list the source list
 * @param n number of elements (must be >= 1)
 * @return list of the first n elements (may have fewer if list size < n)
 * @throws IllegalArgumentException if n < 1
 */
fun <T> first(list: List<T>, n: Int): List<T> {
    require(n >= 1) { "array-first expects n >= 1" }
    return list.take(n)
}
