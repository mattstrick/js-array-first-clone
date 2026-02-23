(ns array-first.core
  "Get the first element or first n elements of a sequence.
   Clojure port of https://github.com/mattstrick/array-first-javascript")

(defn array-first
  "Returns the first element of coll, or nil if empty.
   (array-first coll n) returns the first n elements (or single element if n is 1)."
  ([coll]
   (when (seq coll)
     (clojure.core/first coll)))
  ([coll n]
   (when (seq coll)
     (let [n (if (or (not (number? n)) (< n 1)) 1 (int n))
           taken (take n coll)]
       (if (== n 1)
         (clojure.core/first taken)
         (vec taken))))))
