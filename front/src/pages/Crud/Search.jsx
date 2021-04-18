import React,{useEffect,useState} from 'react';
import search from './search.png'
import {Button,Row,Col} from 'react-bootstrap'
import Adduser from '../Adduser/Adduser'
import Info from './Info'

const rows=[
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:133321 },
    { name:'azeeere',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:185511 },
    { name:'aze',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:151511 },
    { name:'dfsf',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:225122 },
    { name:'ghf',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:515561 },
    { name:'fdfd',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:133321 },
    { name:'aezee',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:185511 },
    { name:'adsfre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:151511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:225122 },
    { name:'dfre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:515561 },
    { name:'fdf',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:133321 },
    { name:'df',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:185511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:151511 },
    { name:'azfdre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:225122 },
    { name:'dfdf',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:515561 }, 
]

function Search() {
    const [input, setInput] = useState();
    const [patient, setpatient] = useState();
   
    const updateInput = async (input) => {
      const filtered = rows.filter(patient => {
       return patient.name.toLowerCase().includes(input.toLowerCase())
      })
      setInput(input);
      setpatient(filtered);
      console.log(patient)
    
    }
    
    return (
        <>
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
                <Adduser/>
            </Col>
            </div>
        </Row>
        { input ? (
        <Info rows={patient}/>):
        (
        <Info rows={rows}/>
        )


        }
        </>
    );
}

export default Search;