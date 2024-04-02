import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Banner from "./Banner";

describe("Banner Component Test", () => {
  test("Banner renders without crashing", () => {
    render(<Banner />);
  });
});
