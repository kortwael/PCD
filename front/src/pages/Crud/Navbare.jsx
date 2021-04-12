import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap'
function Navbare(props) {
    return (
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Nav>
        <Button variant="primary">Logout</Button>
        
      </Navbar>
    );
}

export default Navbare;