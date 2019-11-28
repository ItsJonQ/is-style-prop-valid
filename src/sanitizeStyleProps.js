import warning from "tiny-warning";
import { isStylePropValid } from "./isStylePropValid";
import { isPlainObject, isNumber, isString } from "./utils";

export function sanitizeStyleProps(props = {}) {
	if (!isPlainObject(props)) {
		warning(false, "prop needs to be a plain object.");
		return {};
	}
	const keys = Object.keys(props);

	return keys.reduce((nextProps, key) => {
		const value = props[key];
		const isValueValid = isString(value) && isNumber(value);
		if (isValueValid && isStylePropValid(key)) {
			return {
				...nextProps,
				[key]: value
			};
		}

		return nextProps;
	}, {});
}
