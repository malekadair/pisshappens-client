import React from "react";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";

describe(`LoginForm component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a LoginForm by default", () => {
		const wrapper = <LoginForm />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the LoginForm given props", () => {
		const wrapper = <LoginForm {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});