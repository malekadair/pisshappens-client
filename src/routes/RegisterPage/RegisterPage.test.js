import React from "react";
import toJson from "enzyme-to-json";
import RegisterPage from "./RegisterPage";

describe(`RegisterPage component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a RegisterPage by default", () => {
		const wrapper = <RegisterPage />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the RegisterPage given props", () => {
		const wrapper = <RegisterPage {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});