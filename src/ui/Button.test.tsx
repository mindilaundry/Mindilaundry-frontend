import { screen, render } from "@testing-library/react";
import { test, describe, expect, vitest } from "vitest";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component Tests", () => {
  test("renders Button component without crashing", () => {
    render(<Button />);
  });

  test("calls onClick prop when button is clicked", async () => {
    const handleClick = vitest.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Button component to render children correctly", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
  });

  test("applies custom className to the button", () => {
    render(<Button className="custom" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom");
  });
});
