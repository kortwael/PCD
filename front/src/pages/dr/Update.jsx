import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import axios from 'axios'
function Update(props) {
  const [show, setShow] = useState(false);
  const [name, setname] = useState();
  const [lastname, setlastname] = useState();
  const [num, setnum] = useState();
  const [spec, setspec] = useState();
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleclick= ()=>{
    const formdata ={
      name:name,
      lastname:lastname,
      spec:spec,
      num:num,
    }

      axios.put(`http://127.0.0.1:5000/update_doctor/${props.p}`,formdata).then((response)=>console.log(response))
      window.location.reload(true);
      
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
                <Form.Label>speciality</Form.Label>
                <Form.Control
                  placeholder="speciality"
                  onChange={(e) => setspec(e.target.value)}
                />
              </Col>
            </Form.Row>
            <Form.Row style={{ marginTop: "5%" }}>
              <Col>
                <Form.Label>num</Form.Label>
                <Form.Control
                  placeholder="num"
                  onChange={(e) => setnum(e.target.value)}
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

export default Update;
