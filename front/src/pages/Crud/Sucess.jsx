import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";


function Sucess(props) {const [show, setShow] = useState(false);
  const [name, setname] = useState();
  const [last_name, setlastname] = useState();
  const [room, setroom] = useState();
  const [doctor, setdoctor] = useState();
  const [age, setage] = useState();
  const [ID, setID] = useState();
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleclick= ()=>{
    const formdata ={
      name:name,
      last_name:last_name,
      age:age,
      num:ID,
      room:room,
      dr:doctor
    }

      axios.put(`http://127.0.0.1:5000/update_patient/${props.p}`,formdata)
      window.location.reload(false)
  }


  return (
    <div style={{ margin: "5px" }}>
      <Button variant="success" value={props.value} onClick={handleShow}>
        Update
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>update choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row style={{ marginTop: "5%" }}>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={name}
                  placeholder="First name"
                  onChange={(e) => setname(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Last name"
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  placeholder="Age"
                  onChange={(e) => setage(e.target.value)}
                />
              </Col>
            </Form.Row>
            <Form.Row style={{ marginTop: "5%" }}>
              <Col>
                <Form.Label>Room</Form.Label>
                <Form.Control
                  placeholder="Room Number"
                  onChange={(e) => setroom(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Label>Doctor</Form.Label>
                <Form.Control
                  placeholder="Doctor"
                  onChange={(e) => setdoctor(e.target.value)}
                />
              </Col>
              <Col>
              <Form.Label>ID</Form.Label>
                <Form.Control
                  placeholder="ID"
                  onChange={(e) => setID(e.target.value)}
                />
              </Col>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleclick}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default Sucess;
