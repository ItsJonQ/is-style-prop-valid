import memoize from "memoize-one";
import warning from "tiny-warning";
import { isStylePropValid } from "./isStylePropValid";
import { convertUnitValue } from "./convertUnitValue";
import { is } from "./utils";

/**
 * Removes non style CSSProperty props from an object. Converts
 * non-unitless values to px values.
 * @param {object} props The collection of props to sanitize.
 * @returns {object} A collection of style CSSProperty safe key/value pairs.
 */
export function rawSanitizeStyleProps(props) {
	if (!is.plainObject(props)) {
		warning(false, "prop needs to be a plain object.");
		return {};
	}
	const keys = Object.keys(props);

	return keys.reduce((nextProps, prop) => {
		const value = props[prop];
		const isValueValid = is.string(value) || is.number(value);

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

/**
 * Removes non style CSSProperty props from an object. Converts
 * non-unitless values to px values.
 * @param {object} props The collection of props to sanitize.
 * @returns {object} A collection of style CSSProperty safe key/value pairs.
 */
export const sanitizeStyleProps = memoize(rawSanitizeStyleProps);
