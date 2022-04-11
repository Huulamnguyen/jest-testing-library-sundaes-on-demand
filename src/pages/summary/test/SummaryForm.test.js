import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Checkbox is unchecked and the Button is disabled by default", () => {
  render(<SummaryForm />);

  // The Checkbox is unchecked by default
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  // The button is disable by default
  const confirmButton = screen.getByRole("button", { name: "Confirm Order" });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables the button on the first click and disables the button on the second click", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", { name: "Confirm Order" });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  // Checkbox enables the button on the first click
  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  // Checkbox disables the button on the second click
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
