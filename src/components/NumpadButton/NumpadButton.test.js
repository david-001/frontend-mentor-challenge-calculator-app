import { render, screen } from "@testing-library/react";
import NumpadButton from "./NumpadButton";

describe("NumpadButton", () => {
  test("renders correctly", () => {
    render(<NumpadButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 7", () => {
    render(<NumpadButton value="7" />);
    const buttonElement = screen.getByText("7");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 8", () => {
    render(<NumpadButton value="8" />);
    const buttonElement = screen.getByText("8");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 9", () => {
    render(<NumpadButton value="9" />);
    const buttonElement = screen.getByText("9");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders DEL", () => {
    render(<NumpadButton value="DEL" />);
    const buttonElement = screen.getByText("DEL");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 4", () => {
    render(<NumpadButton value="4" />);
    const buttonElement = screen.getByText("4");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 5", () => {
    render(<NumpadButton value="5" />);
    const buttonElement = screen.getByText("5");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 6", () => {
    render(<NumpadButton value="6" />);
    const buttonElement = screen.getByText("6");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders +", () => {
    render(<NumpadButton value="+" />);
    const buttonElement = screen.getByText("+");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 1", () => {
    render(<NumpadButton value="1" />);
    const buttonElement = screen.getByText("1");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 2", () => {
    render(<NumpadButton value="2" />);
    const buttonElement = screen.getByText("2");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 3", () => {
    render(<NumpadButton value="3" />);
    const buttonElement = screen.getByText("3");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders -", () => {
    render(<NumpadButton value="-" />);
    const buttonElement = screen.getByText("-");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders .", () => {
    render(<NumpadButton value="." />);
    const buttonElement = screen.getByText(".");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders 0", () => {
    render(<NumpadButton value="0" />);
    const buttonElement = screen.getByText("0");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders /", () => {
    render(<NumpadButton value="/" />);
    const buttonElement = screen.getByText("/");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders x", () => {
    render(<NumpadButton value="x" />);
    const buttonElement = screen.getByText("x");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders RESET", () => {
    render(<NumpadButton value="RESET" />);
    const buttonElement = screen.getByText("RESET");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders =", () => {
    render(<NumpadButton value="=" />);
    const buttonElement = screen.getByText("=");
    expect(buttonElement).toBeInTheDocument();
  });
});
