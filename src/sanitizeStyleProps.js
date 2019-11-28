import warning from "tiny-warning";
import { isStylePropValid } from "./isStylePropValid";
import { convertUnitValue } from "./convertUnitValue";
import { isPlainObject, isNumber, isString } from "./utils";

export function sanitizeStyleProps(props) {
	if (!isPlainObject(props)) {
		warning(false, "prop needs to be a plain object.");
		return {};
	}
	const keys = Object.keys(props);

	return keys.reduce((nextProps, prop) => {
		const value = props[prop];
		const isValueValid = isString(value) || isNumber(value);

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
