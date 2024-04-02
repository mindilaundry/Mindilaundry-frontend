import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import TestimonialContent from "./TestimonialContent";

describe("Testimonial-Content Component Test", () => {
  test("testimonial content renders without crashing", () => {
    render(<TestimonialContent name="" review="" />);
  });

  test("customer rating, name and review is visible", () => {
    const name = "Tarry Harcourt";
    const review = "this is new review";
    render(<TestimonialContent name={name} review={review} />);

    expect(screen.getAllByTestId("rating").length).toBeGreaterThan(0);
    expect(screen.getByTestId("customer-name")).toHaveTextContent(name);
    expect(screen.getByTestId("customer-review")).toHaveTextContent(review);
  });
});
