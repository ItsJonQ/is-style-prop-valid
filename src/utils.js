export function isPlainObject(value) {
	return isDefined(value) && value.toString() === "[object Object]";
}

export function isDefined(value) {
	return typeof value !== "undefined" && value !== null;
}

export function isString(value) {
	return typeof value === "string";
}

export function isNumber(value) {
	return typeof value === "number";
}
