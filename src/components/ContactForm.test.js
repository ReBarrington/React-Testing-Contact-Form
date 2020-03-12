import React from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
  render(<ContactForm />);
});

test("contact form data displayed", () => {
  const { getByLabelText, getByTestId } = render(<ContactForm />);

  // query for the form inputs
  const firstNameInput = getByLabelText(/First Name*/i);
  const LastNameInput = getByLabelText(/Last Name*/i);
  const emailInput = getByLabelText(/Email*/i);
  const messageInput = getByLabelText(/Message/i);


  // fireEvent function from RTL to fill in the inputs
  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Reagan" }
  });
  fireEvent.change(LastNameInput, {
    target: { name: "lastName", value: "Barrington" }
  });
  fireEvent.change(emailInput, {
    target: { name: "email", value: "reagan@barringtonfamily.net" }
  });
  fireEvent.change(messageInput, {
      target: { name: "message", value: "Hello World" }
  })

  console.log(firstNameInput.value);

  // query for the submit button
  const submitButton = getByTestId(/form/i);

  // clicking the button
  fireEvent.click(submitButton);
  fireEvent.click(submitButton);

  // assertion
});