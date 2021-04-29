import React, { useState, useEffect } from "react";
import { Form, Col, Container, Button, Modal } from "react-bootstrap";
import axios from "axios";
function Adduser(props) {
  const [image, setimage] = useState();
  const [name, setname] = useState();
  const [last_name, setlastname] = useState();
  const [age, setage] = useState();
  const [room, setroom] = useState();
  const [doctor, setdoctor] = useState();
  const [num, setnum] = useState();
  const [lgShow, setLgShow] = useState(false);
  const onChange = (e) => {
    let file = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (e) => {
      setimage(e.target.result);
    };
  };
  const handleclick = () => {
    const formdata = {
      name: name,
      img: image,
      room: room,
      last_name: last_name,
      dr: doctor,
      num: num,
      age: age,
    };
    axios
      .post("http://127.0.0.1:5000/add_patient", formdata)
      .then((response) => console.log(response.data));
      window.location.reload(true);
  };

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Add User</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container
            style={{
              border: "solid",
              borderColor: "rgb(240,240,240)",
              padding: "5%",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
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
                  <Form.Label>Ages</Form.Label>
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
                    placeholder="Room"
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
                  <Form.Label>num</Form.Label>
                  <Form.Control
                    placeholder="num"
                    onChange={(e) => setnum(e.target.value)}
                  />
                </Col>
              </Form.Row>

              <Form.Row style={{ marginTop: "10%" }}>
                <Form.Label>Choose a ptient picture</Form.Label>
              </Form.Row>
              <Form.Row>
                <Form.File id="formcheck-api-regular">
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => onChange(e)}
                  />
                </Form.File>
              </Form.Row>
            </Form>
            <div
              style={{ marginBottom: "5%", marginTop: "5%", marginLeft: "45%" }}
            >
              <Button onClick={handleclick}>Submit</Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Adduser;
