import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image for each scoop from the server", async () => {
  render(<Options optionType="scoops" />);

  // Find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // Confirm alt text of images
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image from each topping from the server", async () => {
  render(<Options optionType="toppings" />);

  // Find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // Confirm alt text of images
  const altText = toppingImages.map((e) => e.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
