import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TestingComponent from "../TestingComponent";

describe("TestingComponent", () => {
  it("renders the text", () => {
    render(<TestingComponent />);
    expect(screen.getByTestId("test-div").textContent).toBe("Hello Testing");
  });
});
