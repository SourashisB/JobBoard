import { useState } from "react";
import React from "react";
import "./CompressedFilter.css";

const CompressedFilter = ({
  dropdownDisplay,
  handleClick,
  handleInputChange,
  checkboxOnChange,
  filterCategory,
  filterEnclosedCategory,
  dataArray,
  searchFilter,
  checkedItem,
  selectAll,
}) => {
  //obtain unqiue value
  const uniqueFilterValueList = filterEnclosedCategory
    ? dataArray.filter(
        (value, index, self) =>
          index ===
          self.findIndex((secondloopitem) => {
            return (
              secondloopitem[filterCategory][filterEnclosedCategory] ===
              value[filterCategory][filterEnclosedCategory]
            );
          })
      )
    : dataArray.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return t[filterCategory] === value[filterCategory];
          })
      );

  if (dropdownDisplay) {
    return (
      <th>
        <div class="dropdown">
          <button class="dropbtn" onClick={handleClick}>
            Click me to close filter
          </button>
          <div id="myDropdown" class="dropdown-content">
            <input placeholder="search bar" onChange={handleInputChange} />
            <br />
            <label>
              <input type="checkbox" onChange={selectAll} />
              Select All
              <br />
            </label>
            {uniqueFilterValueList
              .filter((eachRole) =>
                eachRole[filterCategory][filterEnclosedCategory].includes(
                  searchFilter
                )
              )
              .map((eachRole, i) => (
                <label>
                  <input
                    defaultChecked={ checkedItem.length !=0 ? 
                      checkedItem.includes(eachRole[filterCategory][filterEnclosedCategory]) :
                      false
                    }
                    type="checkbox"
                    onChange={checkboxOnChange}
                    value={eachRole[filterCategory][filterEnclosedCategory]}
                  />
                  {eachRole[filterCategory][filterEnclosedCategory]}
                  <br />
                </label>
              ))}
          </div>
        </div>
      </th>
    );
  } else {
    return (
      <th>
        <div class="dropdown">
          <button class="dropbtn" onClick={handleClick}>
            Click me to show filter
          </button>
        </div>
      </th>
    );
  }
};

export default CompressedFilter;
