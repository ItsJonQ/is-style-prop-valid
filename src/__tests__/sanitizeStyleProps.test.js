import { sanitizeStyleProps } from "../index";

describe("sanitizeStyleProps", () => {
	test("should return empty object by default", () => {
		const spy = jest.fn();
		global.console.warn = spy;

		const nextProps = sanitizeStyleProps();

		expect(nextProps).toEqual({});

		spy.mockRestore();
	});

	test("should remove invalid keys", () => {
		const props = {
			backgroundColor: "red",
			fontFamily: "serif",
			padding: "10px",
			role: "presentation",
			zIndex: 10
		};

		const nextProps = sanitizeStyleProps(props);

		expect(nextProps).toEqual({
			backgroundColor: "red",
			fontFamily: "serif",
			padding: "10px",
			zIndex: 10
		});
	});

	test("should resolve non-unitless values", () => {
		const props = {
			appearance: "none",
			padding: 10,
			margin: "10px 20px",
			zIndex: 10
		};

		const nextProps = sanitizeStyleProps(props);

		expect(nextProps).toEqual({
			appearance: "none",
			padding: "10px",
			margin: "10px 20px",
			zIndex: 10
		});
	});

	test("should warn if props is invalid", () => {
		const spy = jest.fn();
		global.console.warn = spy;
		const props = [];

		sanitizeStyleProps(props);

		expect(spy).toHaveBeenCalledWith(expect.anything());

		spy.mockRestore();
	});
});
