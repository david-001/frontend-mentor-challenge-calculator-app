import { render, screen } from "@testing-library/react";
import Screen from "./Screen";

describe("NumpadButton", () => {
  test("renders text on screen", () => {
    render(<Screen>9</Screen>);
    const screenElement = screen.getByText("9");
    expect(screenElement).toBeInTheDocument();
  });
});
