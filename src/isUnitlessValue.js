import { unitlessStyleProps } from "./CSSProperty";

/**
 * Determines if the CSSProperty is a unitless value. For example, `lineHeight`.
 * @param {string} prop The prop to check.
 * @returns {boolean} The result.
 */
export function isUnitlessValue(prop) {
	return unitlessStyleProps.includes(prop);
}

export default isUnitlessValue;
