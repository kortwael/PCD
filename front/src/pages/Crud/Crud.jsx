import React from 'react';
import Info from './Info';
import Container from '@material-ui/core/Container';
import Search from './Search'
import Navbare from './Navbare'
function Crud(props) {
    return (
      <>

            <Navbare/>
            <div style={{marginTop:'5%'}}>
            <Container>
            <Search/>
            <Info/>
            </Container>
            </div>
            </>
    );
}

export default Crud;