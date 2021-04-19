import React ,{useState}from "react";
import { Form, Button, Card } from "react-bootstrap";
import {useHistory} from 'react-router-dom'

export default function Login() {
  const [pass,setPass] = useState('')
  const [mail,setMail]= useState('')
  var history = useHistory()
  function change (mail,pass){
    
    const ok = localStorage.getItem('mail')
    const okpass=localStorage.getItem('pass')
    if(ok==='ala@gmail' && okpass==='ala'){ 
     history.push('/Client')}
  }
  return (
    <div className='bg'>
    
      <div style={{ width: "30%", marginLeft: "35%", paddingTop: "15%",paddingBottom: "15%" }} >
      <Card
        border="info"
      >
        <div style={{ width: "80%", textAlign: "center" }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ marginLeft: "17%", marginTop: "5%" }}>
                Email address
              </Form.Label>
              <Form.Control
                style={{ marginLeft: "10%", marginTop: "3%" }}
                type="email"
                placeholder="Enter email"
                onChange={(e)=>{ setMail(e.target.value)}}
              />
              <Form.Text style={{ marginTop: "5%" }} className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ marginLeft: "17%", marginTop: "2%" }}>
                Password
              </Form.Label>
              <Form.Control
                style={{ marginLeft: "10%", marginTop: "3%" }}
                type="password"
                placeholder="Password"
                onChange={(e)=>{ setPass(e.target.value)}}
                
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                style={{ marginRight: "45%", marginTop: "2%" }}
                type="checkbox"
                label="Check me out"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginLeft: "23%", marginBottom: "5%" }}
              
              onClick={(e)=>{e.preventDefault()
                console.log(mail,pass)
                localStorage.setItem('mail',mail)
                localStorage.setItem('pass',pass)
                change(mail,pass)
              }}
            >
              Login
            </Button>
          </Form>

        </div>
      </Card>
      </div>   
      </div>
  );
}
