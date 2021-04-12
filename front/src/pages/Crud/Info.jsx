import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Buttons from './Buttons';
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows=[
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:133321 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:185511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:151511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:225122 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:515561 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:133321 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:185511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:151511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:225122 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:515561 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:133321 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:185511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:151511 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:225122 },
    { name:'azre',lastname:'zaeza',age:'48',room:'22',doctor:'sd', id:515561 }, 
]


function Info(props) {
    const classes = useStyles();
    const history=useHistory()

    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Doctor</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.room}</TableCell>
              <TableCell align="right">{row.doctor}</TableCell>
              <TableCell align="right"><Button variant="outline-dark" value={row.id} onClick={(e)=>history.push(`/client/${e.target.value}`)}>View More info</Button></TableCell>
              <TableCell align="right">
                <Buttons/>
              </TableCell>
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default Info;