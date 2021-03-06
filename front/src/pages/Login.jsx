import React ,{useState}from "react";
import { Form, Button, Card } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import axios from'axios'
import jwt_decode from "jwt-decode";

export default function Login() {
  const [pass,setPass] = useState('')
  const [mail,setMail]= useState('')
  const [token,settoken]=useState()
  var history = useHistory()

  function change (mail,pass){
    const fromdata={email:mail,pwd :pass}
    axios.post('http://127.0.0.1:5000/get_doctor',fromdata).then((res)=>{
    if (res.data.msg){
      alert(res.data.msg)
    }
    localStorage.setItem('user',res.data)
    settoken(jwt_decode(res.data))
    console.log(token)
    localStorage.setItem('ok',token.email)
    console.log(token.lastname)
    if(mail===localStorage.getItem('ok')){
      history.push('/')
    }
      
    window.location.reload(true);
  })
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
