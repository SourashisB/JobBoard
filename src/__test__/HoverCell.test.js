import HoverCell from "../Components/HoverCell";
import { render, screen } from "@testing-library/react";
import React from 'react';
describe("HoberCell function", () => {
  test("correct class", () => {
    render(<HoverCell hidden="hidden" nothidden="nothidden"/>)
    expect(screen.getByText("hidden")).toHaveClass("tooltiptext");
    expect(screen.getByText("nothidden")).toHaveClass("tooltip");
  });

});
