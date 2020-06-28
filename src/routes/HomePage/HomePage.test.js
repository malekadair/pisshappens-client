import React from "react";
import toJson from "enzyme-to-json";
import HomePage from "./HomePage";

describe(`HomePage component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a HomePage by default", () => {
		const wrapper = <HomePage />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the HomePage given props", () => {
		const wrapper = <HomePage {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});