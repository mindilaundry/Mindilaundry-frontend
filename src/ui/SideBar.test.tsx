import { render, screen, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect, beforeEach, vi } from "vitest";
import SideBar from "./SideBar";

describe("SideBar Component Test", () => {
  const renderWithRouter = (ui: ReactNode) =>
    render(ui, { wrapper: BrowserRouter });

  test("renders all nav links correctly", () => {
    renderWithRouter(<SideBar open={true} />);
    const navLinks = screen.getAllByRole("link");
    expect(navLinks.length).toBeGreaterThan(0);
    expect(navLinks.length).toBe(navLinks.length);
  });

  test("renders login Linkbutton", () => {
    renderWithRouter(<SideBar open={true} />);
    const linkButton = screen.getByRole("link", { name: /Login/i });
    expect(linkButton).toBeInTheDocument();
  });

  test("animates Sidebar on closing", async () => {
    renderWithRouter(<SideBar open={false} />);
    expect(screen.getAllByTestId("sidebar")[0]).toHaveClass(
      "translate-x-[-120%]",
    );
  });
  test("animates Sidebar on opening", async () => {
    renderWithRouter(<SideBar open={true} />);
    expect(screen.getAllByTestId("sidebar")[0]).toHaveClass("translate-x-0");
  });
});
