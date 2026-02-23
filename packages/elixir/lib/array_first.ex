defmodule ArrayFirst do
  @moduledoc """
  Get the first element or first n elements of a list.
  Elixir port of https://github.com/mattstrick/array-first-javascript
  """

  @doc """
  Returns the first element or first n elements of a list.

  - `first(list)` — returns the first element, or `nil` if empty.
  - `first(list, n)` — returns the first n elements (single element if n is 1).
  """
  def first(list) when is_list(list) do
    case list do
      [] -> nil
      [h | _] -> h
    end
  end

  def first(list, n) when is_list(list) do
    n = if is_number(n) and n >= 1, do: trunc(n), else: 1
    case list do
      [] -> nil
      _ when n == 1 -> hd(list)
      _ -> list |> Enum.take(n)
    end
  end
end
