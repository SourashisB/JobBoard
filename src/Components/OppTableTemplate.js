import React from "react";
import LocationAbv from "./LocationAbv";
import HoverCell from "./HoverCell";
import DropdownFilter from "./tableComponents/DropdownFilter";
import Row from "./Row";
import Date from "./Date";
import Error from "./Error";
import "../CSS/OppTableTemplate.css";
import { useState, useEffect } from "react";
import ShortName from "./ShortName";
import "../CSS/OppTableTemplate.css";
import getXML from "../UtilityFunctions/getXML";
import xmlToJson from "../UtilityFunctions/newXMLJSON";
import Pages from "./Pages";
import ResetButton from "./ResetButton";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function OppTableTemplate(props) {
  // let { location } = useParams();
  const sampleLocation = useLocation();
  let officeState = sampleLocation.pathname.split("/").pop();

  console.log(officeState);

  if (officeState == "NewYork") {
    officeState = "New York";
  }

  if (officeState == "Australia") {
    officeState = "AUS";
  }

  if (officeState == "Opportunities") {
    officeState = null;
  }

  console.log("OURURLLOCATIONIS " + officeState);

  const [data, setData] = useState(
    {
      OpenOpportunityRoles: {
        OpportunityRole: [
          {
            Id: "",
            Name: " ",
            EstimatedStartDate: " ",
            Division: " ",
            ResourcesRequired: " ",
            Client: " ",
            Salesperson: {
              Id: " ",
              Name: " ",
              ShortName: " ",
              Email: " ",
              Office: "",
            },
          },
        ],
      },
    }.OpenOpportunityRoles.OpportunityRole
  );

  const [accountManagerFilter, setaccountManagerFilter] = useState(null);
  const [clientFilter, setClientFilter] = useState(null);
  const [divisionFilter, setdivisionFilter] = useState(null);
  const [officeLocationFilter, setofficeLocationFilter] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const [storedTable, setStoredTable] = useState(
    {
      OpenOpportunityRoles: {
        OpportunityRole: [
          {
            Id: "",
            Name: " ",
            EstimatedStartDate: " ",
            Division: " ",
            ResourcesRequired: " ",
            Client: " ",
            Salesperson: {
              Id: "0053z00000C26BKAAZ ",
              Name: "Tracy Dove ",
              ShortName: "T. Dove ",
              Email: "tracy.dove@fdmgroup.com",
              Office: "US",
            },
          },
        ],
      },
    }.OpenOpportunityRoles.OpportunityRole
  );
  const [bool, setBool] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  function cleandata(target) {
    for (let index = 0; index < target.length; index++) {
      if (typeof target[index].Salesperson == "undefined") {
        target[index].Salesperson = {
          Id: " ",
          Name: " ",
          ShortName: " ",
          Email: " ",
          Office: " ",
        };
      }

      if (!target[index].hasOwnProperty("Name")) {
        target[index].Name = " ";
      }
      if (!target[index].hasOwnProperty("EstimatedStartDate")) {
        target[index].EstimatedStartDate = " ";
      }
      if (!target[index].hasOwnProperty("Division")) {
        target[index].Division = " ";
      }
      if (!target[index].hasOwnProperty("ResourcesRequired")) {
        target[index].ResourcesRequired = " ";
      }
      if (!target[index].hasOwnProperty("Client")) {
        target[index].Client = " ";
      }
      if (!target[index].hasOwnProperty("Salesperson")) {
        target[index].Salesperson = " ";
      }
      if (!target[index].Salesperson.hasOwnProperty("Name")) {
        target[index].Salesperson.Name = " ";
      }
      if (!target[index].Salesperson.hasOwnProperty("Email")) {
        target[index].Salesperson.Email = " ";
      }
      if (!target[index].Salesperson.hasOwnProperty("Office")) {
        target[index].Salesperson.Office = " ";
      }

      if (!target[index].Salesperson.hasOwnProperty("ShortName")) {
        target[index].Salesperson.ShortName = " ";
      }
      Object.keys(target[index]).forEach((e) => {
        if (Object.keys(target[index][e]).length === 0) {
          target[index][e] = " ";
        }
      });
    }
  }

  useEffect(() => {
    getXML().then((getResponse) => {
      console.log(typeof getResponse.data);
      var replacedXMLtext = getResponse.data.replaceAll("&", "&amp;");
      var parser = new DOMParser();
      var parsedxml = parser.parseFromString(replacedXMLtext, "text/xml");
      console.log(parsedxml);
      var parsedXMLtoJson = xmlToJson(parsedxml);
      console.log(parsedXMLtoJson);
      if (
        parsedXMLtoJson.OpportunitiesViewData.OpenOpportunityRoles == undefined
      ) {
        console.log("data is undefined");
        setBool(false);
      } else {
        console.log("data is fined");

        let processingData =
          parsedXMLtoJson.OpportunitiesViewData.OpenOpportunityRoles
            .OpportunityRole;
        cleandata(processingData);
        setData(processingData);
        setStoredTable(processingData);
        setofficeLocationFilter(officeState);
      }
    });
  }, []);

  useEffect(() => {
    //Filter options updated so apply all filters here
    let result = storedTable;
    if (accountManagerFilter) {
      result = result.filter(
        (eachRole) => eachRole.Salesperson.Name === accountManagerFilter
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
  }, [
    accountManagerFilter,
    clientFilter,
    divisionFilter,
    officeLocationFilter,
  ]);

  const getFilterword = (val) => {
    setClientFilter(val.target.value);
    setSearchValue(val.target.value);
  };
  const getFilterOfficeword = (val) => {
    setofficeLocationFilter(val.target.value);
  };
  const getFilterSalespersonName = (val) => {
    setaccountManagerFilter(val.target.value);
  };

  const getFilterDivision = (val) => {
    setdivisionFilter(val.target.value);
  };

  let pagelimit = Math.ceil(data.length / 20);

  console.log("LENGTHOFDATA" + data.length);
  console.log("PAGELIMIT" + pagelimit);
  console.log("TotalObjects" + data.length);

  const getNextPage = () => {
    setPageNo(pageNo < pagelimit ? pageNo + 1 : pagelimit);
  };
  const getPreviousPage = () => {
    setPageNo(pageNo > 1 ? pageNo - 1 : 1);
  };

  const resetFilters = () => {
    setofficeLocationFilter(null);
    setClientFilter(null);
    setaccountManagerFilter(null);
    setdivisionFilter(null);
    setSearchValue("");
    setaccountManagerFilter(null);
    console.log("reset being hit");
  };

  if (bool == false) {
    return <Error />;
  } else {
    return (
      <>
        <div className="oppTable">
          <h1 className="opptitle"> Opportunities</h1>
          <table className="opptable">
            <thead className="oppheader">
              <th>Index</th>
              <th>Account Manager</th>
              <th>Client</th>
              <th>Office</th>
              <th>Opportunity</th>
              <th>No. Roles</th>
              <th>Est. Start Date</th>
            </thead>

            <tbody>
              <tr>
                <th>&#128515; search here--&#62;</th>
                <DropdownFilter
                  dataArray={data}
                  filterCategory="Salesperson"
                  filterEnclosedCategory="Name"
                  onChangeFunction={getFilterSalespersonName}
                />

                <th>
                  <input
                    placeholder="searchbar"
                    onChange={getFilterword}
                    value={searchValue}
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
                <ResetButton reset={resetFilters} />
              </tr>
              {data
                .filter(
                  (eachRole, i) => i < pageNo * 20 && i >= (pageNo - 1) * 20
                )
                .map((eachRole, i) => (
                  <Row stream={".InfStream"}>
                    <td>{(pageNo - 1) * 20 + i + 1}</td>
                    <td>
                      <HoverCell
                        nothidden={eachRole.Salesperson.ShortName}
                        hidden={eachRole.Salesperson.Name}
                        hiddenlink={eachRole.Salesperson.Email}
                      ></HoverCell>
                    </td>
                    <td>
                      <ShortName client={eachRole.Client} />
                    </td>
                    <LocationAbv location={eachRole.Salesperson.Office} />
                    <td>{eachRole.Name}</td>
                    <td>{eachRole.ResourcesRequired}</td>
                    <Date
                      value={eachRole.EstimatedStartDate}
                      format={"DD/MM/YYYY"}
                    ></Date>
                  </Row>
                ))}
            </tbody>
          </table>
          <div>
            <Pages
              pageLimit={pagelimit}
              pageNo={pageNo}
              next={getNextPage}
              previous={getPreviousPage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default OppTableTemplate;
