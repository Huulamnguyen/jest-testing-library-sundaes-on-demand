import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

test("Updates scoop subtotal when scoop changes", async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // Make sure total starts out $0.00
  const scoopSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // Update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  // .clear to clear the input
  userEvent.clear(vanillaInput);
  // .type to type the input a value
  userEvent.type(vanillaInput, "1");
  // expect scoopSubtotal to have textContent of 2.00
  expect(scoopSubtotal).toHaveTextContent("2.00");

  // Update chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopSubtotal).toHaveTextContent("6.00");
});
