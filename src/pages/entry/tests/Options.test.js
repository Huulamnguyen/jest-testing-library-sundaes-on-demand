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
