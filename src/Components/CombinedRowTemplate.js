import Row from "./Row";
import Date from "./Date";
import Cell from "./Cell";
import LocationAbv from "./LocationAbv";
//whatever data we need to show in the row
const CombinedRowTemplate = ({stream, parent, child, location, dateValue, text1}) => {
    return(//use whichever components we have created
        <Row stream={stream}>
            <Cell parent={parent} child={child}>
                <p>{text1}</p>
            </Cell>
            <LocationAbv location={location}/>
            <Date value={dateValue}/>
        </Row>
    )
}

export default CombinedRowTemplate;