import React, {useState} from 'react';
import {Form,Col,Container,Button,Modal} from 'react-bootstrap';
function Adduser(props) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
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
          <Modal.Title id="example-modal-sizes-title-lg">

          Add User 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container style={{border:'solid',borderColor:'rgb(240,240,240)',padding:'5%',marginTop:'5%',marginBottom:'5%'}}>

        <Form>
  <Form.Row style={{marginTop:'5%'}}>
    <Col>
    <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="First name" onChange={(e) => console.log(e)}/>
    </Col>
    <Col>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
    <Col>
    <Form.Label>Ages</Form.Label>
      <Form.Control placeholder="Age" onChange={(e) => console.log(e)}/>
    </Col>
  </Form.Row>
  <Form.Row style={{marginTop:'5%'}}>
    
    <Col>
    <Form.Label>Room</Form.Label>
      <Form.Control placeholder="Room" />
    </Col>
    <Col>
    <Form.Label>Doctor</Form.Label>
      <Form.Control placeholder="Doctor" onChange={(e) => console.log(e)}/>
    </Col>
    </Form.Row>

    <Form.Row style={{marginTop:'5%'}}>
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>patient picture</Form.File.Label>
      <Form.File.Input />
    </Form.File>
    </Form.Row>
  
</Form>
<div style={{marginBottom:'5%',marginTop:'5%',marginLeft:'45%'}}>
<Button>Submit</Button>
</div>
</Container>

        </Modal.Body>
      </Modal>
    </>

    );
}

export default Adduser;