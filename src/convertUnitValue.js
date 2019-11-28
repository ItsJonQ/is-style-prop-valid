import { isUnitlessValue } from "./isUnitlessValue";
import { isNumber } from "./utils";

/**
 * Converts a non-unitless CSSProperty value to px.
 * @param {string} prop The CSS prop.
 * @param {string|number} value The value to convert.
 * @returns {string|number} The converted value, if applicable.
 */
export function convertUnitValue(prop, value) {
	if (!isNumber(value)) {
		return value;
	}

	return isUnitlessValue(prop) ? value : `${value}px`;
}

export default convertUnitValue;
