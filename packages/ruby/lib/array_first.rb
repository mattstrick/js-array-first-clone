# frozen_string_literal: true

# Get the first element or first n elements of an array.
# Ruby port of https://github.com/mattstrick/array-first-javascript
module ArrayFirst
  module_function

  # Returns the first element or first n elements.
  # first(arr) => first element or nil
  # first(arr, n) => first n elements (single element if n is 1)
  def first(arr, n = nil)
    raise TypeError, "array-first expects an array as the first argument." unless arr.is_a?(Array)
    return nil if arr.empty?

    if n.nil?
      arr[0]
    else
      take = (n.is_a?(Integer) && n >= 1) ? n : 1
      slice = arr.first(take)
      take == 1 ? slice[0] : slice
    end
  end
end
