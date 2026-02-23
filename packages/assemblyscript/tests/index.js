const fs = require("fs");
const path = require("path");
const loader = require("@assemblyscript/loader");

async function runTests() {
  const wasmModule = await loader.instantiate(
    fs.readFileSync(path.join(__dirname, "..", "build", "release.wasm"))
  );
  const { exports } = wasmModule;
  const { __pin, __unpin, __newArray, __getArray } = exports;

  console.log("array-first (AssemblyScript) tests");

  // Test firstElement
  const arr1 = __pin(__newArray(exports.Int32Array_ID, [10, 20, 30, 40]));
  const first = exports.firstElement(arr1);
  __unpin(arr1);
  if (first !== 10) throw new Error(`firstElement([10,20,30,40]) expected 10, got ${first}`);
  console.log("  firstElement: OK");

  // Test firstN
  const arr2 = __pin(__newArray(exports.Int32Array_ID, [1, 2, 3, 4, 5]));
  const first3 = __pin(exports.firstN(arr2, 3));
  __unpin(arr2);
  const result = __getArray(first3);
  __unpin(first3);
  if (result.length !== 3 || result[0] !== 1 || result[1] !== 2 || result[2] !== 3) {
    throw new Error(`firstN([1,2,3,4,5], 3) expected [1,2,3], got [${result}]`);
  }
  console.log("  firstN: OK");

  console.log("All tests passed.");
}

runTests().catch((err) => {
  console.error(err);
  process.exit(1);
});
