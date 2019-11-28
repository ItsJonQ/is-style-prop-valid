import { validStyleKeys } from "./CSSProperty";
import { isString } from "./utils";

export function isStylePropValid(key) {
	return isString(key) && validStyleKeys.includes(key);
}

export default isStylePropValid;
