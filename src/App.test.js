import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calc text", () => {
  render(<App />);
  const linkElement = screen.getByText("calc");
  expect(linkElement).toBeInTheDocument();
});
