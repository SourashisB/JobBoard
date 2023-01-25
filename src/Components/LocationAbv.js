import "../CSS/LocationAbv.css";
import React from "react";

function LocationAbv({ location }) {
  if (location)
    switch (String(location.toUpperCase())) {
      case "CA":
        return <td className="Location"> CAN </td>;
      case "LEEDS":
        return <td className="Location"> Leeds[GBR]</td>;
      case "LONDON":
        return <td className="Location"> LONDON[GBR] </td>;
      case "US":
        return <td className="Location"> USA </td>;
      case "AUS":
        return <td className="Location"> AUS </td>;
      case "GERMANY":
        return <td className="Location"> DEU </td>;
      case "GLASGOW":
        return <td className="Location"> Glasgow[GBR] </td>;
      case "HK":
        return <td className="Location"> HKG </td>;
      case "TORONTO":
        return <td className="Location"> Toronto[CAN] </td>;
      case "CHINA":
        return <td className="Location"> CHN </td>;
      case "SINGAPORE":
        return <td className="Location"> SGP </td>;
      case "POLAND":
        return <td className="Location"> POL </td>;
      case "NEW YORK":
        return <td className="Location"> New York[USA] </td>;
      case "SOUTH AFRICA":
        return <td className="Location"> ZAF </td>;
      case "AUSTIN":
        return <td className="Location"> Austin[USA] </td>;
      case "RESTON":
        return <td className="Location"> Reston[USA] </td>;
      case "CHARLOTTE":
        return <td className="Location"> Charlotte[USA]</td>;
      case "NETHERLANDS":
        return <td className="Location"> Netherlands[NLD] </td>;
      case "AUSTRALIA":
        return <td className="Location"> AUS </td>;
      default:
        return <td className="Location"> - </td>;
    }
}

export default LocationAbv;
