import { isUnitlessValue } from "./isUnitlessValue";
import { is } from "./utils";

/**
 * Converts a non-unitless CSSProperty value to px.
 * @param {string} prop The CSS prop.
 * @param {string|number} value The value to convert.
 * @returns {string|number} The converted value, if applicable.
 */
export function convertUnitValue(prop, value) {
	if (!is.number(value)) {
		return value;
	}

	return isUnitlessValue(prop) ? value : `${value}px`;
}

export default convertUnitValue;
