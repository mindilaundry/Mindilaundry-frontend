import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

import { navlinks as navItems } from "../utils/navLinks";

import Nav from "./Nav";

describe("Nav Component Tests", () => {
  const renderWithRouter = (ui: ReactNode) =>
    render(ui, { wrapper: BrowserRouter });

  test("Nav renders without crashing", () => {
    renderWithRouter(<Nav />);
  });

  test("is accessbile", () => {
    renderWithRouter(<Nav className="custom-style" />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  test("applies custom className to nav", () => {
    renderWithRouter(<Nav className="custom-style" />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("custom-style");
  });

  test("renders all nav links correctly", () => {
    renderWithRouter(<Nav className="custom-style" />);
    const navLinks = screen.getAllByRole("link") as HTMLAnchorElement[];
    expect(navLinks.length).toBe(navLinks.length);

    navLinks.forEach((navLink, i) => {
      expect(navLink).toHaveAttribute("href", navItems[i].link);
      expect(navLink.textContent).toBe(navItems[i].title);
    });
  });

  test("all nav links navigate to the right URL when clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Nav />);

    const navLinks = screen.getAllByRole("link") as HTMLAnchorElement[];

    for (let i = 0; i < navLinks.length; i++) {
      const navLink = navLinks[i];

      const expectedUrl = navItems[i].link;
      await user.click(navLink);

      expect(window.location.pathname).toBe(expectedUrl);
    }
  });
});
