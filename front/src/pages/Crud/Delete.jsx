import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'
function Delete(props) {
        const [show, setShow] = useState(false);
        const [del,setdel]= useState()
        const handleClose = () => setShow(false);
        const handleShow = (e) =>{
          console.log(e.target.value)
         setShow(true);}
        const deletedoc = (e) => {
          axios.delete(`http://127.0.0.1:5000/${props.tp}/${e.target.value}`)
                .then((response)=>console.log(response))
                window.location.reload(true);
        }
        return (
          <div style={{margin:'5px'}}>
            <Button variant="danger" value={props.value} onClick={e=>{handleShow(e) ;setdel(props.value)}}>
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
                <Button variant="danger" value={del} onClick={(e)=>deletedoc(e)}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      
      
}

export default Delete;