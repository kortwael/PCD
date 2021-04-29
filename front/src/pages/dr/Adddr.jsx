import React, {useState,useEffect} from 'react';
import {Form,Col,Container,Button,Modal} from 'react-bootstrap';
import axios from 'axios'
function Adddr(props) {
  const [name,setname]=useState()
  const [lastname,setlastname]=useState()
  const [num,setnum]=useState()
  const [email,setemail]=useState()
  const [pwd,setpwd]=useState()
  const [spec,setspec]=useState()
  const [lgShow, setLgShow] = useState(false);

    const handleclick= ()=>{
      const formdata={
        name:name,
        lastname:lastname,
        spec:spec,
        num:num,
        email:email,
        pwd:pwd
      }
      axios.post('http://127.0.0.1:5000/add_doctor',formdata)
      .then((response)=>console.log(response.data))
      window.location.reload(true);
    }

    return (
      <>
      <Button onClick={() => setLgShow(true)}>Add Doctor</Button>
    
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Add Doctor 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container style={{border:'solid',borderColor:'rgb(240,240,240)',padding:'5%',marginTop:'5%',marginBottom:'5%'}}>

        <Form>
  <Form.Row style={{marginTop:'5%'}}>
    <Col>
    <Form.Label>First Name</Form.Label>
      <Form.Control value={name} placeholder="First name" onChange={(e) => setname(e.target.value)}/>
    </Col>
    <Col>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" onChange={(e) => setlastname(e.target.value)}/>
    </Col>
    <Col>
    <Form.Label>speciality</Form.Label>
      <Form.Control placeholder="speciality" onChange={(e) => setspec(e.target.value)}/>
    </Col>

  </Form.Row>
  <Form.Row style={{marginTop:'5%'}}>
    <Col>
    <Form.Label>num</Form.Label>
      <Form.Control placeholder="num" onChange={(e) => setnum(e.target.value)}/>
    </Col>
    <Col>
    <Form.Label>Email</Form.Label>
      <Form.Control value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
    </Col>
    <Col>
    <Form.Label>Password</Form.Label>
      <Form.Control value={pwd} placeholder="password" type='password' onChange={(e) => setpwd(e.target.value)}/>
    </Col>
    </Form.Row>
  
</Form>
<div style={{marginBottom:'5%',marginTop:'5%',marginLeft:'45%'}}>
<Button onClick={handleclick}>Submit</Button>
</div>
</Container>

        </Modal.Body>
      </Modal>
    </>

    );
}

export default Adddr;