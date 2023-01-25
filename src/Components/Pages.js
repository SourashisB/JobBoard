import React from "react";

const Pages = ({ pageLimit, pageNo, next, previous }) => {
  return (
    <div class="pages">
      {pageNo == 1 ? null : (
        <button class="Previouspage" onClick={previous}>
          previous
        </button>
      )}
      {pageNo === pageLimit ? null : (
        <button class="nextpage" onClick={next}>
          next
        </button>
      )}
      <h5>Page {pageNo}</h5>
    </div>
  );
};

export default Pages;
