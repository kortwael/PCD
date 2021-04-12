import React from 'react';
import Delete from './Delete'
import Sucess from './Sucess'
import {Row} from 'react-bootstrap'
function Buttons(props) {
    return (
        <Row style={{marginLeft:'5%'}}>
            <Sucess></Sucess>
            <Delete></Delete>
        </Row>
    );
}

export default Buttons;