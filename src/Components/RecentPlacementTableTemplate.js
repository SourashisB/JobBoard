import React, { useState, useEffect } from "react";
import HoverCell from "./HoverCell";
import Row from "./Row";
import Date from "./Date";
import Error from "./Error";
import DropdownFilter from "./tableComponents/DropdownFilter";
import "../CSS/RecentPlacementTableTemplate.css";
import ShortName from "./ShortName";
import Pages from "./Pages";
import ResetButton from "./ResetButton";
import xmlToJson from "../UtilityFunctions/newXMLJSON";
import getXML from "../UtilityFunctions/getXML";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function RecentPlacementTableTemplate() {
  const sampleLocation = useLocation();
  let officeState = sampleLocation.pathname.split("/").pop();
  console.log("OURURLLOCATIONIS" + officeState);

  if (officeState == "RecentPlacements") {
    officeState = null;
  }

  const [data, setData] = useState(
    {
      RecentPlacements: {
        Placement: [
          {
            Id: " ",
            Resource: " ",
            ResourceShortName: " ",
            StartDate: " ",
            Division: " ",
            Client: " ",
            Salesperson: { Name: " ", Office: "" },
          },
        ],
      },
    }.RecentPlacements.Placement
  );
  const [nameFilter, setNameFilter] = useState(null);
  const [clientFilter, setClientFilter] = useState(null);
  const [divisionFilter, setdivisionFilter] = useState(null);
  const [officeLocationFilter, setofficeLocationFilter] = useState(null);
  const [nameSearchValue, setNameSearchValue] = useState(null);
  const [clientSearchValue, setClientSearchValue] = useState(null);

  const [storedTable, setStoredTable] = useState(
    {
      RecentPlacements: {
        Placement: [
          {
            Id: "a0y3z00000uATHAAB2",
            Resource: " ",
            ResourceShortName: " ",
            StartDate: " ",
            Division: " ",
            Client: " ",
            Salesperson: { Name: "Callum Wilson", Office: "London" },
          },
        ],
      },
    }.RecentPlacements.Placement
  );
  const [pageNo, setPageNo] = useState(1);
  const [bool, setBool] = useState(true);
  function cleandata(target) {
    for (let index = 0; index < target.length; index++) {
      if (typeof target[index].Salesperson == "undefined") {
        target[index].Salesperson = {
          Name: " ",
          Office: " ",
        };
      }
      if (!target[index].hasOwnProperty("Resource")) {
        target[index].Resource = " ";
      }
      if (!target[index].hasOwnProperty("ResourceShortName")) {
        target[index].ResourceShortName = " ";
      }
      if (!target[index].hasOwnProperty("StartDate")) {
        target[index].StartDate = " ";
      }
      if (!target[index].hasOwnProperty("Division")) {
        target[index].Division = " ";
      } else if (target[index].Division == "") {
        target[index].Division = " ";
      }
      if (!target[index].hasOwnProperty("Client")) {
        target[index].Client = " ";
      }
      if (!target[index].hasOwnProperty("Salesperson")) {
        target[index].Salesperson = " ";
      }
      if (!target[index].Salesperson.hasOwnProperty("Office")) {
        target[index].Salesperson.Office = " ";
      }
      Object.keys(target[index]).forEach((e) => {
        if (Object.keys(target[index][e]).length === 0) {
          target[index][e] = " ";
        }
      });
    }
  }

  const getFilterName = (val) => {
    setNameFilter(val.target.value);
    setNameSearchValue(val.target.value);
  };
  const getFilterOfficeword = (val) => {
    setofficeLocationFilter(val.target.value);
  };
  const getFilterClient = (val) => {
    setClientFilter(val.target.value);
    setClientSearchValue(val.target.value);
  };

  const getFilterDivision = (val) => {
    setdivisionFilter(val.target.value);
  };

  const resetFilter = () => {
    setNameSearchValue("");
    setClientSearchValue("");
    setNameFilter(null);
    setClientFilter(null);
    setdivisionFilter(null);
    setofficeLocationFilter(null);
  };

  useEffect(() => {
    getXML().then((getResponse) => {
      var replacedXMLtext = getResponse.data.replaceAll("&", "&amp;");
      var parser = new DOMParser();
      var parsedxml = parser.parseFromString(replacedXMLtext, "text/xml");
      console.log(parsedxml);
      var parsedXMLtoJson = xmlToJson(parsedxml);

      if (parsedXMLtoJson.OpportunitiesViewData.RecentPlacements == undefined) {
        setBool(false);
      } else {
        let processData =
          parsedXMLtoJson.OpportunitiesViewData.RecentPlacements.Placement;
        cleandata(processData);
        setData(processData);
        setStoredTable(processData);
        setofficeLocationFilter(officeState);
      }
    });
  }, []);
  useEffect(() => {
    //Filter options updated so apply all filters here
    let result = storedTable;
    //  let result =storedTable;

    if (nameFilter) {
      result = result.filter((eachRole) =>
        eachRole.Resource.includes(nameFilter)
      );
    }
    if (clientFilter) {
      result = result.filter((eachRole) =>
        eachRole.Client.includes(clientFilter)
      );
    }
    if (divisionFilter) {
      result = result.filter(
        (eachRole) => eachRole.Division === divisionFilter
      );
    }
    if (officeLocationFilter) {
      result = result.filter(
        (eachRole) => eachRole.Salesperson.Office === officeLocationFilter
      );
    }
    setData(result);
    setPageNo(1);
  }, [nameFilter, clientFilter, divisionFilter, officeLocationFilter]);

  let pagelimit = Math.ceil(data.length / 20);

  const getNextPage = () => {
    setPageNo(pageNo < pagelimit ? pageNo + 1 : pagelimit);
  };
  const getPreviousPage = () => {
    setPageNo(pageNo > 1 ? pageNo - 1 : 1);
  };
  if (bool == false) {
    return (
      <>
        <Error />
      </>
    );
  } else {
    return (
      <div className="recTable">
        <section className="recSection">
          <h1 className="rectitle"> Recent Placements</h1>
          <table className="placementTable">
            <thead className="placementHeader">
              <th>Index</th>
              <th>Name</th>
              <th>Client</th>
              <th>Office</th>
              <th>Division</th>
              <th>Start Date</th>
            </thead>
            <tbody>
              <tr>
                <th>&#128515; search here--&#62;</th>
                <th>
                  <input
                    placeholder="searchbar"
                    onChange={getFilterName}
                    value={nameSearchValue}
                  />
                </th>

                <th>
                  <input
                    placeholder="searchbar"
                    onChange={getFilterClient}
                    value={clientSearchValue}
                  />
                </th>
                <DropdownFilter
                  dataArray={data}
                  filterCategory="Salesperson"
                  filterEnclosedCategory="Office"
                  onChangeFunction={getFilterOfficeword}
                />
                <DropdownFilter
                  dataArray={data}
                  filterCategory="Division"
                  onChangeFunction={getFilterDivision}
                />
                <ResetButton
                  reset={() => {
                    resetFilter();
                  }}
                ></ResetButton>
              </tr>
              {data
                .filter(
                  (eachPlacement, i) =>
                    i <= pageNo * 20 && i >= (pageNo - 1) * 20
                )
                .map((eachPlacement, i) => (
                  <Row stream={".InfStream"}>
                    <td>{(pageNo - 1) * 20 + i + 1}</td>
                    <td>
                      <HoverCell
                        nothidden={eachPlacement.ResourceShortName}
                        hidden={eachPlacement.Resource}
                      ></HoverCell>
                    </td>
                    <td>
                      <ShortName client={eachPlacement.Client} />
                    </td>
                    <td>{eachPlacement.Salesperson.Office}</td>

                    <td>{eachPlacement.Division}</td>
                    <Date
                      value={eachPlacement.StartDate}
                      format={"DD/MM/YYYY"}
                    ></Date>
                  </Row>
                ))}
            </tbody>
          </table>
          <Pages
            pageLimit={pagelimit}
            pageNo={pageNo}
            next={getNextPage}
            previous={getPreviousPage}
          />
        </section>
      </div>
    );
  }
}

export default RecentPlacementTableTemplate;
