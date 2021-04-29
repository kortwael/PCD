import React, { useEffect, useState } from "react";
import search from "./search.png";
import { Row, Col } from "react-bootstrap";
import Adduser from "../Adduser/Adduser";
import Info from "./Info";
import axios from "axios";

function Search() {

  const [data, setdata] = useState([]);
    useEffect(() => {
    axios.get("http://127.0.0.1:5000/get_patients").then((response) => {
      setdata(response.data.data);
      console.log(response.data.data);
    });
  }, []);
 
  const [input, setInput] = useState();
  const [patient, setpatient] = useState([]);

  const updateInput = async (input) => {
    const filtered = data.filter((patient) => {
      return patient.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setpatient(filtered);
    console.log(patient);
  };

  return (
    <>
      <Row style={{ marginBottom: "1%" }}>
        <Col>
          <img src={search} width={40} />
          <input
            type="text"
            placeholder="Search.."
            key="random1"
            onChange={(e) => updateInput(e.target.value)}
          />
        </Col>
        <div style={{ marginLeft: "50%" }}>
          <Col>
            <Adduser />
          </Col>
        </div>
      </Row>
      {input ? <Info rows={patient} /> : <Info rows={data} />}
    </>
  );
}

export default Search;
