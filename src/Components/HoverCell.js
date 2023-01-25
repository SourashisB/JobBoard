import React from "react";
import "../CSS/HoverCell.css";
function HoverCell({ nothidden, hidden, hiddenlink }) {
  var emailLink = "mailto:" + hiddenlink;
  return (nothidden === "" ? <div className="tooltip"></div> : 
    <>
      <div role="p1" className="tooltip">
        {nothidden}{" "}
      </div>
      <div role="p2" className="tooltiptext">
        {hidden}
        <br />
        <a role="p3" href={emailLink}>{hiddenlink}</a>
      </div>
    </>
  );
}

export default HoverCell;
