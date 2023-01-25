import React from "react";

const Date = ({ format, value }) => {
  if (value) {
    value = value.replace("T00:00:00", "").trim();
    value = value.replaceAll("-", "/").trim();
    var valueArr = value.split("/");
    value = valueArr[2] + "/" + valueArr[1] + "/" + valueArr[0];
  }
  //checks for format '<two digits>/<two digits>/<four digits>'
  const isDateFormatted = (val) =>
    val.match(value.match(/\d{2}\/\d{2}\/\d{4}/));

  if (format && value && isDateFormatted(value)) {
    const dateParts = value.split("/");
    let year = dateParts[2];
    let month = dateParts[1];
    let day = dateParts[0];
    let updatedYear = format.match(/YYYY/)
      ? format.replace("YYYY", year)
      : format.replace("YY", year.substring(2));
    let displayDate = updatedYear.replace("MM", month).replace("DD", day);
    return <td role="date">{displayDate}</td>;
  } else if (!value || !isDateFormatted(value)) {
    return (
      <td role="date" className="error-text">
       {/* error */}
      </td>
    );
  } else {
    return <td role="date">{value}</td>;
  }
};
export default Date;
