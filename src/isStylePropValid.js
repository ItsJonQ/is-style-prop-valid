import { validStyleProps } from "./CSSProperty";
import { is } from "./utils";

/**
 * Determines if the prop is valid CSSProperty.
 * @param {string} prop The prop to check.
 * @returns {boolean} The result.
 */
export function isStylePropValid(prop) {
	return is.string(prop) && validStyleProps.includes(prop);
}

export default isStylePropValid;
