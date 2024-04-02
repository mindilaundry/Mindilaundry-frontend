import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Testimonial from "./Testimonial";

describe("Testimonial Component Test", () => {
  test("testimonial renders without crashing", () => {
    render(<Testimonial />);
  });
  test("renders testimonial content correctly", () => {
    render(<Testimonial />);
    expect(
      screen.getAllByTestId("testimonial-container")[0],
    ).toBeInTheDocument();
  });

  test("render prev and next buttons correctly and they work properly", async () => {
    render(<Testimonial />);
    const button = screen.getAllByRole("button");
    expect(button.length).toBe(2);
  });
});
