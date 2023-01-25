import React from "react";


function EmptyData( {data} ) {
    if(data == undefined || data == null || data == {}) {
        data = {};
    } else if(data == "") {
        data = ""
    }
    return data;
  };
  
  export default EmptyData;
  