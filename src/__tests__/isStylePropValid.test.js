import { isStylePropValid } from "../index";

describe("isStylePropValid", () => {
	test("should return true for valid style props", () => {
		expect(isStylePropValid("all")).toBe(true);
		expect(isStylePropValid("animation")).toBe(true);
		expect(isStylePropValid("appearance")).toBe(true);
		expect(isStylePropValid("background")).toBe(true);
		expect(isStylePropValid("font")).toBe(true);
		expect(isStylePropValid("padding")).toBe(true);
	});

	test("should return true for valid camel-cased style props", () => {
		expect(isStylePropValid("fontFamily")).toBe(true);
		expect(isStylePropValid("paddingLeft")).toBe(true);
		expect(isStylePropValid("backgroundColor")).toBe(true);
		expect(isStylePropValid("zIndex")).toBe(true);
	});

	test("should return false for hyphenated style props", () => {
		expect(isStylePropValid("font-family")).toBe(false);
		expect(isStylePropValid("padding-left")).toBe(false);
		expect(isStylePropValid("background-color")).toBe(false);
		expect(isStylePropValid("z-index")).toBe(false);
	});

	test("should return false for invalid style props", () => {
		expect(isStylePropValid("aria-label")).toBe(false);
		expect(isStylePropValid("keyup")).toBe(false);
		expect(isStylePropValid("onChange")).toBe(false);
		expect(isStylePropValid("role")).toBe(false);
	});
});
