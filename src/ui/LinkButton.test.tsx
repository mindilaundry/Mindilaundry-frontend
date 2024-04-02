import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import LinkButton from "./LinkButton";
import { ReactNode } from "react";

describe("Link Component test", () => {
  const renderWithRouter = (ui: ReactNode) =>
    render(ui, { wrapper: BrowserRouter });

  test("link renders without crashing", () => {
    renderWithRouter(<LinkButton to="/test" title="Test Link" />);
  });

  test("navigates to the correct URL when clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<LinkButton to="/test" title="Test Link" />);
    const link = screen.getByRole("link", { name: "Test Link" });
    await user.click(link);
    const route = window.location.pathname;
    expect(route).toBe("/test");
  });

  test("applies custom className to the button", () => {
    renderWithRouter(
      <LinkButton to="/test" title="Test Link" className="custom-style" />,
    );
    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveClass("custom-style");
  });

  test("is accessible", () => {
    renderWithRouter(
      <LinkButton to="/test" title="Test Link" className="custom-style" />,
    );
    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
