import { render, screen } from "@testing-library/react";
import Row from "../Components/Row";
import React from 'react'

describe("Row Error Cases", () => {
  test("No stream is given", () => {
    render(
      <table>
        <Row></Row>
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("errorStream");
  });
  
  test("Stream given is incorrect or unavailable", () => {
    render(
      <table>
        <Row stream="Gardening" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("errorStream");
  });
});

describe("Row Creation Cases i.e. check if stream entered creates correct row colours", () => {
  test("PMOStream", () => {
    render(
      <table>
        <Row stream="PMO" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("PMOStream");
  });
  test("Testing Stream", () => {
    render(
      <table>
        <Row stream="Testing" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("TestingStream");
  });
  test("BA Stream", () => {
    render(
      <table>
        <Row stream="BusinessAnalysis" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("BAStream");
  });
  test("Consulting Stream", () => {
    render(
      <table>
        <Row stream="Consulting" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("ConsultingStream");
  });
  test("ITSM Stream", () => {
    render(
      <table>
        <Row stream="ITSM" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("ITSMStream");
  });
  test("DataServices Stream", () => {
    render(
      <table>
        <Row stream="DataServices" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("DataServicesStream");
  });
  test("BusinessIntelligenceStream", () => {
    render(
      <table>
        <Row stream="BusinessIntelligence" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("BIStream");
  });
  test("Salesforce Stream", () => {
    render(
      <table>
        <Row stream="Salesforce" />
      </table>
    );
    expect(screen.getByRole("tableRow")).toHaveClass("SalesForceStream");
  });
});
