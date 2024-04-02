import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi, afterEach } from "vitest";
// import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { ReactNode } from "react";

describe("Test Header Component", () => {
  const renderWithRouter = (ui: ReactNode) =>
    render(ui, { wrapper: BrowserRouter });
  beforeEach(() => {
    renderWithRouter(<Header />);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("Renders Logo", () => {
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  test("renders order button", () => {
    expect(screen.getByRole("link", { name: "Order" })).toBeInTheDocument();
  });

  // test("renders login button on large screens", () => {
  //   vi.stubGlobal("innerWidth", 1024);
  //   const loginButton = screen.queryByRole("link", { name: /Log in/ });
  //   expect(loginButton).not.toHaveStyle("display: none"); // Ensure the login button is displayed
  // });

  // test("does not render login button on small screens", () => {
  //   vi.stubGlobal("innerWidth", 1023);
  //   const loginButton = screen.queryByRole("link", { name: /Log in/ });
  //   expect(loginButton).toHaveStyle("display: none"); // Ensure the login button is hidden
  // });
});
