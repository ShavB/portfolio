import { render, screen } from "@testing-library/react";
import Navbar from "../../src/components/Navbar";
import { describe, expect, test } from "vitest";

describe("Navbar", () => {
  test("should render Home tab", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("should render Blog tab", () => {
    render(<Navbar />);
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  test("should render Projects tab", () => {
    render(<Navbar />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  test("should render Misc tab", () => {
    render(<Navbar />);
    expect(screen.getByText("Misc")).toBeInTheDocument();
  });

  test("should render search icon", async () => {
    render(<Navbar />);
    const searchIcon = await screen.findByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("should render logo icon", async () => {
    render(<Navbar />);
    const logoIcon = await screen.findByTestId("logo-icon");
    expect(logoIcon).toBeInTheDocument();
  });
});
