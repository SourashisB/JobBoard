import LocationAbv from "../Components/LocationAbv";
import { render, screen } from "@testing-library/react";

describe("Location Abbreviation function", () => {
  test("converts location input to the ISO 3 digit country standard", () => {
    render(<LocationAbv location={"CA"} />);
    expect(screen.getByText("CAN")).toBeInTheDocument();
  });

  test("tests that when given wrong value would return default('location') ", () => {
    render(<LocationAbv location={"LAX"} />);
    expect(screen.getByText("Location")).toBeInTheDocument();
  });

  test("converts given lower case input, to uppercase", () => {
    render(<LocationAbv location={"ca"} />);
    expect(screen.getByText("CAN")).toBeInTheDocument();
  });

  test("converts given lower case input to uppercase and works for cities", () => {
    render(<LocationAbv location={"Leeds"} />);
    expect(screen.getByText("Leeds[GBR]")).toBeInTheDocument();
  });
});

describe("Location Abbreviation function error cases", () => {
  test("converts unexpected input to default('Location')", () => {
    render(<LocationAbv location={"LAX"} />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
