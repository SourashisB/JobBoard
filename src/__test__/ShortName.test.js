import React from "react";
import { render, screen } from "@testing-library/react";
import OppTableTemplate from "../Components/OppTableTemplate";
import ShortName from "../Components/ShortName";
import App from "../Components/../App";

describe("testing ShortName compoennt", () => {
  test("No Client name is given", () => {
    render(<ShortName client={" "} />);
    expect(screen.getByRole("client")).toBeTruthy();
  });

  test("Changing 'Hong Kong and Shanghayi Banking Co.' to HSBC", () => {
    render(
      <ShortName client={"Hongkong and Shanghai Banking Corporation Limited"} />
    );
    expect(screen.getByText("HSBC")).toBeInTheDocument();
  });
  test("Hongkong & Shanghai Banking Corporation Limited", () => {
    render(
      <ShortName client={"Hongkong & Shanghai Banking Corporation Limited"} />
    );
    expect(screen.getByText("HSBC")).toBeInTheDocument();
  });
  test("Hongkong & Shanghai Banking Co.", () => {
    render(<ShortName client={"Hongkong & Shanghai Banking Co."} />);
    expect(screen.getByText("HSBC")).toBeInTheDocument();
  });

  test("Pass 'Paysafe Holdings UK Limited' and received teh same name", () => {
    render(<ShortName client={"Paysafe Holdings UK Limited"} />);
    expect(screen.getByText("Paysafe Holdings UK Limited")).toBeInTheDocument();
  });
});
