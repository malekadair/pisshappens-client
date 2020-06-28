import React from "react";
import toJson from "enzyme-to-json";
import Welcome from "./Welcome";

describe(`Welcome component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a Welcome by default", () => {
		const wrapper = <Welcome />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the Welcome given props", () => {
		const wrapper = <Welcome {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});