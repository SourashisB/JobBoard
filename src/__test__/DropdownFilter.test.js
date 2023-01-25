import React from "react";
import {
  render,
  screen,
  fireEvent,
  getAllByRole,
} from "@testing-library/react";
import DropdownFilter from "../Components/tableComponents/DropdownFilter";

describe("Unit test for DropdownFilter function", () => {
  test("filer extra repeated item for no enclosed object", () => {
    let person1 = { name: "Amos" };
    let person2 = { name: "Bmos" };
    let person3 = { name: "Cmos" };
    let person4 = { name: "Amos" };
    let person5 = { name: "Dmos" };
    let person6 = { name: "Bmos" };
    let person7 = { name: "Emos" };
    let array = [];
    array.push(person1);
    array.push(person2);
    array.push(person3);
    array.push(person4);
    array.push(person5);
    array.push(person6);
    array.push(person7);
    render(<DropdownFilter dataArray={array} filterCategory="name" />);

    expect(screen.getAllByText("Amos")).toHaveLength(1);
    expect(screen.getAllByText("Bmos")).toHaveLength(1);
    expect(screen.getAllByText("Cmos")).toHaveLength(1);
    expect(screen.getAllByText("Dmos")).toHaveLength(1);
  });

  test("filer extra repeated item for 1 enclosed object", () => {
    let person1 = { name: "Amos", School: { name: "FDM" } };
    let person2 = { name: "Bmos", School: { name: "FEM" } };
    let person3 = { name: "Cmos", School: { name: "FEM" } };
    let person4 = { name: "Amos", School: { name: "FGM" } };
    let person5 = { name: "Dmos", School: { name: "FGM" } };
    let person6 = { name: "Bmos", School: { name: "FDM" } };
    let person7 = { name: "Emos", School: { name: "FDM" } };
    let array = [];
    array.push(person1);
    array.push(person2);
    array.push(person3);
    array.push(person4);
    array.push(person5);
    array.push(person6);
    array.push(person7);
    render(
      <DropdownFilter
        dataArray={array}
        filterCategory="School"
        filterEnclosedCategory="name"
      />
    );

    expect(screen.getAllByText("FDM")).toHaveLength(1);
    expect(screen.getAllByText("FEM")).toHaveLength(1);
    expect(screen.getAllByText("FGM")).toHaveLength(1);
  });

//   test("passin function exits", () => {
//     const testfunction = () => {
//       return "HelloWorld";
//     };
//     let person1 = { name: "Amos" };
//     let person2 = { name: "Bmos" };
//     let person3 = { name: "Cmos" };
//     let person4 = { name: "Amos" };
//     let person5 = { name: "Dmos" };
//     let person6 = { name: "Bmos" };
//     let person7 = { name: "Emos" };
//     let array = [];
//     array.push(person1);
//     array.push(person2);
//     array.push(person3);
//     array.push(person4);
//     array.push(person5);
//     array.push(person6);
//     array.push(person7);
//     render(
//       <DropdownFilter
//         dataArray={array}
//         filterCategory="name"
//         onChangeFunction={testfunction}
//       />
//     );
//     const input = screen.getAllByRole("combobox");
//     fireEvent.change(input, { target: { value: "Bmos" } });
//   });
});
