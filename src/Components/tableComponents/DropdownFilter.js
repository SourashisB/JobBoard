import React from "react";

const DropdownFilter = ({
  dataArray,
  filterCategory,
  filterEnclosedCategory,
  onChangeFunction,
}) => {
  const uniqueFilterValueList = filterEnclosedCategory
    ? dataArray.filter(
        (value, index, self) =>
          index ===
          self.findIndex((secondloopitem) => {
            return (
              secondloopitem[filterCategory][filterEnclosedCategory] ===
                value[filterCategory][filterEnclosedCategory] &&
              value[filterCategory][filterEnclosedCategory] != " "
            );
          })
      )
    : dataArray.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return (
              t[filterCategory] === value[filterCategory] &&
              value[filterCategory] != " "
            );
          })
      );

  return filterEnclosedCategory ? (
    <th>
      <select onChange={onChangeFunction} defaultValue="">
        <option value="">Choose an option</option>
        <option value="" onClick={onChangeFunction}>
          View all
        </option>

        {uniqueFilterValueList.map((eachRole, i) => (
          <option value={eachRole[filterCategory][filterEnclosedCategory]}>
            {eachRole[filterCategory][filterEnclosedCategory]}
          </option>
        ))}
      </select>
    </th>
  ) : (
    <th>
      <select onChange={onChangeFunction} defaultValue="">
        <option value="">Choose an option</option>
        <option value="">View all </option>
        {uniqueFilterValueList.map((eachRole, i) => (
          <option value={eachRole[filterCategory]}>
            {eachRole[filterCategory]}
          </option>
        ))}
      </select>
    </th>
  );
};
export default DropdownFilter;
