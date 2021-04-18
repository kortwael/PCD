import React,{useState} from 'react';
import {Button,Modal,Form,Col} from 'react-bootstrap'
    
  
function Buttons(props) {
    const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <div style={{margin:'5px'}}>
           <Button variant="success" value={props.value} onClick={handleShow}>
             Update
            </Button>
      
            <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>update choice</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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

    
  
</Form>
                </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal>
            
        </div>
    );
}

export default Buttons;