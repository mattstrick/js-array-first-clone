<?php

/**
 * Get the first element or first n elements of an array.
 * PHP port of https://github.com/mattstrick/array-first-javascript
 *
 * @param array $arr
 * @param int|null $n
 * @return mixed First element, first n elements as array, or null if empty
 */
function array_first(array $arr, ?int $n = null)
{
    if (count($arr) === 0) {
        return null;
    }
    if ($n === null) {
        return $arr[array_key_first($arr)];
    }
    $n = $n < 1 ? 1 : $n;
    $slice = array_slice($arr, 0, $n, true);
    return $n === 1 ? $slice[array_key_first($slice)] : array_values($slice);
}
