# array-first (Java)

> Get the first element or first n elements of a list.

## Usage

```java
import com.mattstrick.arrayfirst.ArrayFirst;
import java.util.List;

List<Integer> list = List.of(1, 2, 3, 4, 5);
ArrayFirst.first(list);      // Optional.of(1)
ArrayFirst.first(list, 3);  // [1, 2, 3]
```

## Build

```bash
./gradlew build
```

## License

MIT
