import React from "react";
import toJson from "enzyme-to-json";
import RegistrationForm from "./RegistrationForm";

describe(`RegistrationForm component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a RegistrationForm by default", () => {
		const wrapper = <RegistrationForm />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the RegistrationForm given props", () => {
		const wrapper = <RegistrationForm {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});