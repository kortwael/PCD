import React,{useEffect,useState} from 'react';
import search from '../Crud/search.png'
import {Button,Row,Col} from 'react-bootstrap'
import Doctor from './Doctor';
import Adddr from './Adddr';
import Navb from '../Crud/Navbare'
import { Container } from '@material-ui/core';
import axios from'axios'


function Searchdr() {

    useEffect(()=>{axios.get('http://127.0.0.1:5000/get_docs')
                        .then((response)=>{setdata(response.data.data)})

}
                        
,[])
    const [data,setdata]=useState([])                                        
    const [input, setInput] = useState();
    const [doctors, setdoctors] = useState([]);
   
    const updateInput = async (input) => {
      const filtered = data.filter(patient => {
       return patient.name.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input);
      setdoctors(filtered);
      console.log(doctors)
    
    }
    
    return (
        <>
         <Navb />
        <Container>
         <div style={{marginTop:'10%'}}>
        <Row style={{marginBottom:'1%'}}>
            <Col>
                <img src={search} width={40}/>
                <input type="text" 
                placeholder="Search.."
                key="random1"
                onChange={(e) => updateInput(e.target.value)}
                />
            </Col>
            <div style={{marginLeft:'50%'}}>
            <Col>
                <Adddr/>
            </Col>
            </div>
        </Row>
       { input ? (  <Doctor rows={doctors}/>) : 
       
       (  <Doctor rows={data}/>) }
        

        </div>   
        </Container>
        </>
    );
}

export default Searchdr;