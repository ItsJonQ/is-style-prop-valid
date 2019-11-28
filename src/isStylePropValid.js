import { VALID_STYLE_KEYS } from "./constants";
import { isString } from "./utils";

export function isStylePropValid(key = "") {
	return isString(key) && VALID_STYLE_KEYS.include(key);
}

export default isStylePropValid;
