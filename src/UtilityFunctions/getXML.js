import axios from "axios";
import XMLData from "../Resources/xmlData.xml";
import { xml2json } from "xml-js";

async function getXML() {
    return axios.get(XMLData, {"Content-type": "application/xml; charset=utf-8"})
}

export default getXML;
