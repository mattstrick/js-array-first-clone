package com.mattstrick.arrayfirst;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Get the first element or first n elements of a list. Java port of
 * https://github.com/mattstrick/array-first-javascript
 */
public final class ArrayFirst {

    private ArrayFirst() {}

    /** Returns the first element, or empty Optional if the list is null or empty. */
    public static <T> Optional<T> first(List<T> list) {
        if (list == null || list.isEmpty()) return Optional.empty();
        return Optional.of(list.get(0));
    }

    /**
     * Returns the first n elements. If n is 1, returns a list of one element.
     * If n < 1, treated as 1.
     */
    public static <T> List<T> first(List<T> list, int n) {
        if (list == null || list.isEmpty()) return Collections.emptyList();
        int take = n < 1 ? 1 : Math.min(n, list.size());
        return list.stream().limit(take).collect(Collectors.toList());
    }
}
