import React from 'react';
import Container from '@material-ui/core/Container';
import Navbare from './Navbare'
import Search from './Search';
import Footerr from './Footerr'
function Crud() {
    return (
      <>

            <Navbare/>
            <div style={{marginTop:'5%'}}>
            <Container>
            <Search/>
            </Container>
            <Footerr/>
            </div>
            </>
    );
}

export default Crud;