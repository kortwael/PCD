import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap'

function Delete(props) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="danger" onClick={handleShow}>
             Delete
            </Button>
      
            <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>confirm your choice</Modal.Title>
              </Modal.Header>
              <Modal.Body><h6>once the data is deleted it can be restored</h6></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="danger" onClick={handleClose}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      
      
}

export default Delete;