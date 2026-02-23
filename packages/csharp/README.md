# array-first (C#)

> Get the first element or first n elements of a list.

## Usage

```csharp
using ArrayFirst;

var arr = new List<int> { 1, 2, 3, 4, 5 };
First.ArrayFirst(arr);      // => 1
First.ArrayFirst(arr, 3);   // => [1, 2, 3]
```

## Build

```bash
dotnet build
```

## License

MIT
