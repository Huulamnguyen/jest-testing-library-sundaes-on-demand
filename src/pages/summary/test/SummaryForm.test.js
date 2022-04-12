import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  // Checkbox disables the button on the second click
  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
