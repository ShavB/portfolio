import { render, screen } from "@testing-library/react";
import Navbar from "../../src/components/Navbar";
import { describe, expect, it } from "vitest";

describe("Navbar", () => {
  it("renders list of tabs", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
