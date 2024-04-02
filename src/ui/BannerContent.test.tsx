import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BannerContent from "./BannerContent";

describe("BannerContent Component Tests", () => {
  test("BannerConten renders without crashing", () => {
    render(
      <BannerContent
        title1="Save Time for More"
        title2="Important Things"
        text="We will take care about"
        image="banner background image"
      />,
    );
  });

  test("renders children correctly", () => {
    const childContent = "this is children";
    render(
      <BannerContent
        title1="Save Time for More"
        title2="Important Things"
        text="We will take care about"
        image="banner background image"
      >
        {childContent}
      </BannerContent>,
    );
    expect(screen.getByText(childContent)).toBeInTheDocument();
  });

  test("applies custom className to Banner", () => {
    const title = "Save Time for More";
    render(
      <BannerContent
        title1={title}
        title2="Important Things"
        text="We will take care about"
        image="banner background image"
        className="custom"
      />,
    );
    const bannerContent = screen.getByTestId("banner-content");
    expect(bannerContent).toHaveClass("custom");
  });
});
