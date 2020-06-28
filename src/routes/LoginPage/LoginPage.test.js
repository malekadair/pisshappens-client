import React from "react";
import toJson from "enzyme-to-json";
import LoginPage from "./LoginPage";

describe(`LoginPage component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a LoginPage by default", () => {
		const wrapper = <LoginPage />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the LoginPage given props", () => {
		const wrapper = <LoginPage {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});