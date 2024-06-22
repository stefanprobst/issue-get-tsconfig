import { createPathsMatcher, getTsconfig } from 'get-tsconfig'

/** @type {<T>(value: T) => asserts value is NonNullable<T>} */
function assert(value) {
	if (value == null) throw new Error("Something went wrong.")
}

const config = getTsconfig("./e2e/tsconfig.json")
assert(config)
const matcher = createPathsMatcher(config)
assert(matcher)

console.log(matcher("@/check.ts"))
