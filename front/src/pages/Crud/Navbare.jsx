import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import {useHistory} from 'react-router-dom';
function Navbare() {
  var history = useHistory();
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
    window.location.reload(true);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/Crud">
        <img src={logo} width="100px" height="60px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Crud">Home</Nav.Link>
          <Nav.Link href="/Doctor">Doctors</Nav.Link>
        </Nav>

        <Button variant="outline-light" onClick={logout}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbare;
