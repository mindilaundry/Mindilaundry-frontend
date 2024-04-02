import { screen, render } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import LaundryExpress from "./LaundryExpress";
import { services } from "../utils/laundryExpressServices";

describe("Laundry Express Component test", () => {
  test("renders Laundry Express Component without crashing", () => {
    render(<LaundryExpress />);
  });

  test("All services are rendered", () => {
    render(<LaundryExpress />);
    services.forEach((service) => {
      const regex = new RegExp(service.text, "i");
      expect(screen.getByText(regex)).toBeInTheDocument();
    });
  });

  test("All service images are rendered with correct alt text", () => {
    render(<LaundryExpress />);
    services.forEach((service) => {
      const regex = new RegExp(service.Image.altText, "i");
      const image = screen.getByAltText(regex);
      expect(image).toHaveAttribute("alt", service.Image.altText);
      expect(image).toHaveAttribute("src", service.Image.src);
    });
  });
});
