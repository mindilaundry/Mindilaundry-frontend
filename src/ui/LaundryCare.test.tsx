import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import LaundryCare from "./LaundryCare";
import { BrowserRouter } from "react-router-dom";
import { expressServices } from "../utils/laundryExpressServices";

describe("LaundryCare Component Test", () => {
  const renderWithRouter = (ui: ReactNode) =>
    render(ui, { wrapper: BrowserRouter });
  test("LaundryCare Component renders without crashing", () => {
    renderWithRouter(<LaundryCare />);
  });

  test("All care services are rendered the correct title, text, and description ", () => {
    renderWithRouter(<LaundryCare />);
    expressServices.forEach((service) => {
      const titleRegex = new RegExp(service.title, "i");
      const textRegex = new RegExp(service.text, "i");
      const descriptionRegex = new RegExp(service.title, "i");
      expect(screen.getByText(titleRegex)).toBeInTheDocument();
      expect(screen.getByText(textRegex)).toBeInTheDocument();
      expect(screen.getByText(descriptionRegex)).toBeInTheDocument();
    });
  });

  test("Renders all images with right alt text", () => {
    renderWithRouter(<LaundryCare />);
    expressServices.forEach((service) => {
      const regex = new RegExp(service.image.altText, "i");
      const serviceImage = screen.getByAltText(regex);
      expect(serviceImage).toHaveAttribute("alt", service.image.altText);
      expect(serviceImage).toHaveAttribute("src", service.image.src);
    });
  });
  test("All rendered link button have the correc link button", () => {
    renderWithRouter(<LaundryCare />);
    expressServices.forEach((service) => {
      if (service.link && service.linkTitle) {
        const linkNameRegex = new RegExp(service.linkTitle, "i");
        const linkButton = screen.getByRole("link", { name: linkNameRegex });
        expect(linkButton).toHaveAttribute("href", service.link);
      }
      return;
    });
  });
});
