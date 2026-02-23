defmodule ArrayFirst.MixProject do
  use Mix.Project

  @version "1.0.2"
  @url "https://github.com/jonschlinkert/array-first"

  def project do
    [
      app: :array_first,
      version: @version,
      elixir: "~> 1.14",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      description: "Get the first element or first n elements of a list.",
      package: [
        licenses: ["MIT"],
        links: %{"GitHub" => @url}
      ]
    ]
  end

  def application do
    []
  end

  defp deps do
    []
  end
end
