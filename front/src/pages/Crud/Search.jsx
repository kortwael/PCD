import React from 'react';
import search from './search.png'
import {Button,Row,Col} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Adduser from '../Adduser/Adduser'


function Search(props) {
    const history= useHistory()
    return (
        <Row style={{marginBottom:'1%'}}>
            <Col>
                <img src={search} width={40}/>
                <input type="text" placeholder="Search.."/>
            </Col>
            <div style={{marginLeft:'50%'}}>
            <Col>
                <Adduser/>
            </Col>
            </div>
    

        </Row>
    );
}

export default Search;