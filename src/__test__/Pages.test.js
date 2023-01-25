import { render, screen } from "@testing-library/react";
import App from "../App.js";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Tests next pages function on opportunity page", () => {
  test("next page", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(screen.getByText("Page 2")).toBeInTheDocument;
  });

  test("Tests previous page works", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "next" }));
    userEvent.click(screen.getByRole("button", { name: "previous" }));
    expect(screen.getByText("Page 1")).toBeInTheDocument;
  });

  test("Tests previous page wont go below page 1", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "previous" }));
    expect(screen.getByText("Page 1")).toBeInTheDocument;
  });

  test("Tests next pages wont go above pagelimit", () => {
    render(<App />);
    for (let i = 1; i < 20; i++) {
      userEvent.click(screen.getByRole("button", { name: "next" }));
    }
    expect(screen.getByText("Page 17")).toBeInTheDocument;
  });
});

describe("Test pages function on recent placement page", () => {
  test("Tests next page", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "Recent Placement" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(screen.getByText("Page 2")).toBeInTheDocument;
  });

  test("Tests previous page", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "Recent Placement" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));
    userEvent.click(screen.getByRole("button", { name: "previous" }));
    expect(screen.getByText("Page 1")).toBeInTheDocument;
  });

  test("Tests previous page wont go below page 1", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "Recent Placement" }));
    userEvent.click(screen.getByRole("button", { name: "previous" }));
    expect(screen.getByText("Page 1")).toBeInTheDocument;
  });

  test("Tests next pages wont go above pagelimit", () => {
    render(<App />);
    userEvent.click(screen.getByRole("button", { name: "Recent Placement" }));
    for (let i = 1; i < 22; i++) {
      userEvent.click(screen.getByRole("button", { name: "next" }));
    }
    expect(screen.getByText("Page 19")).toBeInTheDocument;
  });
});
