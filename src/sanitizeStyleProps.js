import warning from "tiny-warning";
import { isStylePropValid } from "./isStylePropValid";
import { convertUnitValue } from "./convertUnitValue";
import { isPlainObject, isNumber, isString } from "./utils";

/**
 * Removes non style CSSProperty props from an object. Converts
 * non-unitless values to px values.
 * @param {object} props The collection of props to sanitize.
 * @returns {object} A collection of style CSSProperty safe key/value pairs.
 */
export function sanitizeStyleProps(props) {
	if (!isPlainObject(props)) {
		warning(false, "prop needs to be a plain object.");
		return {};
	}
	const keys = Object.keys(props);

	return keys.reduce((nextProps, prop) => {
		const value = props[prop];
		const isValueValid = isString(value) || isNumber(value);

		if (isValueValid && isStylePropValid(prop)) {
			const nextValue = convertUnitValue(prop, value);

			return {
				...nextProps,
				[prop]: nextValue
			};
		}

		return nextProps;
	}, {});
}
