import React from 'react';
import Container from '@material-ui/core/Container';
import Navbare from './Navbare'
import Search from './Search';
function Crud(props) {
    return (
      <>

            <Navbare/>
            <div style={{marginTop:'5%'}}>
            <Container>
            <Search/>
            </Container>
            </div>
            </>
    );
}

export default Crud;