import "../CSS/Row.css";
import React from "react";

const Row = ({ stream, children }) => {
  const divisions = [
    "PMO",
    "Testing",
    "BusinessAnalysis",
    "Consulting",
    "ITSM",
    "DataServices",
    "BusinessIntelligence",
    "Salesforce",
    "Infrastructure", 
  ];
  const resolveColourBasedOnStreamName = () => {
    //delegates colour based on stream
    var className = "";
    if (stream == divisions[0]) {
      return (className = "PMOStream");
    } else if (stream == divisions[1]) {
      return (className = "TestingStream");
    } else if (stream == divisions[2]) {
      return (className = "BAStream");
    } else if (stream == divisions[3]) {
      return (className = "ConsultingStream");
    } else if (stream == divisions[4]) {
      className = "ITSMStream";
      return className;
    } else if (stream == divisions[5]) {
      return (className = "DataServicesStream");
    } else if (stream == divisions[6]) {
      return (className = "BIStream");
    } else if (stream == divisions[7]) {
      return (className = "SalesForceStream");
    } else if (stream == divisions[8]) {
      return (className = "InfStream");
    } else if (!stream) return (className = "errorStream");
    else if (stream == "none") return (className = "noStream");
    else return (className = "errorStream");
  };

  //returns the row with Colour
  return (
    <tr role="tableRow" className={resolveColourBasedOnStreamName()}>
      {children}
    </tr>
  );
};

export default Row;
