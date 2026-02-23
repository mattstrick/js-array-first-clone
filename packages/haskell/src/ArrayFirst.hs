-- | Get the first element or first n elements of a list.
--   Haskell port of https://github.com/mattstrick/array-first-javascript
module ArrayFirst
  ( arrayFirst,
    arrayFirstN,
  )
where

-- | Returns the first element, or Nothing if the list is empty.
arrayFirst :: [a] -> Maybe a
arrayFirst [] = Nothing
arrayFirst (x : _) = Just x

-- | Returns the first n elements. If n <= 0, treated as 1.
--   When n is 1, returns a single-element list.
arrayFirstN :: [a] -> Int -> Maybe [a]
arrayFirstN [] _ = Nothing
arrayFirstN xs n =
  let k = max 1 n
   in Just (take k xs)
