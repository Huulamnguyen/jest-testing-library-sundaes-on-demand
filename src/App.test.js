import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const text = screen.getByText(/react testing library and jest/i);
  expect(text).toBeInTheDocument();
});
