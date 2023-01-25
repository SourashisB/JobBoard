import { render, screen } from "@testing-library/react";
import Date from "../Components/Date";
import React from 'react';

describe("Format handling", () => {
  test("No specific format given", () => {
    //Swap to ISO 8601: YYYY-MM-DD
    render(<Date value={"2021-05-05"} />);
    expect(screen.getByText("05/05/2021")).toBeInTheDocument();
  });

  test("Correct format of YYYY/MM/DD", () => {
    render(<Date format={"YYYY/MM/DD"} value={"2022/01/05"} />);
    expect(screen.getByText("2022/01/05")).toBeInTheDocument();
  });

  test("Correct format of MM/DD/YYYY", () => {
    render(<Date format={"MM/DD/YYYY"} value={"2022/01/05"} />);
    expect(screen.getByText("01/05/2022")).toBeInTheDocument();
  });

  test("Change delimiters", () => {
    render(<Date format={"MM-DD-YYYY"} value={"2022/01/20"} />);
    expect(screen.getByText("01-20-2022")).toBeInTheDocument();
  });

  test("Shorten Year", () => {
    render(<Date format={"MM-DD-YY"} value={"2022/01/20"} />);
    expect(screen.getByText("01-20-22")).toBeInTheDocument();
  });

  test("Only Month and Day", () => {
    render(<Date format={"MM.DD"} value={"2022/01/20"} />);
    expect(screen.getByText("01.20")).toBeInTheDocument();
  });
});
