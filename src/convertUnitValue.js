import { isUnitlessValue } from "./isUnitlessValue";
import { isNumber } from "./utils";

export function convertUnitValue(prop, value) {
	if (!isNumber(value)) {
		return value;
	}

	return isUnitlessValue(prop) ? value : `${value}px`;
}

export default convertUnitValue;
