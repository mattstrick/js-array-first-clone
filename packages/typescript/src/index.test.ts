import { describe, it, expect } from "vitest";
import { first } from "./index";

describe("first", () => {
  it("returns first element", () => {
    expect(first(["a", "b", "c", "d", "e", "f"])).toBe("a");
  });

  it("returns first element when n is 1", () => {
    expect(first(["a", "b", "c", "d", "e", "f"], 1)).toBe("a");
  });

  it("returns first n elements", () => {
    expect(first(["a", "b", "c", "d", "e", "f"], 3)).toEqual(["a", "b", "c"]);
  });

  it("returns null for empty array", () => {
    expect(first([])).toBe(null);
    expect(first([], 3)).toBe(null);
  });

  it("throws if not array", () => {
    expect(() => first(null as unknown as unknown[])).toThrow("array-first expects");
  });
});
