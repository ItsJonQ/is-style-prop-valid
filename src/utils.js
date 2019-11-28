export function isPlainObject(value) {
	return value.toString() === "[object Object]";
}

export function isString(value) {
	return typeof value === "string";
}

export function isNumber(value) {
	return typeof value === "number";
}
