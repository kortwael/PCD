import React from 'react';
import Delete from './Delete'
import Sucess from './Sucess'
import {Row} from 'react-bootstrap'
function Buttons(props) {
    return (
        <Row style={{marginLeft:'5%'}}>
            <Sucess value={props.value}/>
            <Delete value={props.value}/>
        </Row>
    );
}

export default Buttons;