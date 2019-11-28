import { unitlessStyleKeys } from "./CSSProperty";

export function isUnitlessValue(key) {
	return unitlessStyleKeys.includes(key);
}

export default isUnitlessValue;
