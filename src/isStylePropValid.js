import { validStyleProps } from "./CSSProperty";
import { isString } from "./utils";

/**
 * Determines if the prop is valid CSSProperty.
 * @param {string} prop The prop to check.
 * @returns {boolean} The result.
 */
export function isStylePropValid(prop) {
	return isString(prop) && validStyleProps.includes(prop);
}

export default isStylePropValid;
