import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Update from './Update'
import Delete from '../Crud/Delete'
import {Row} from 'react-bootstrap'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function Doctor(props) {
  const classes = useStyles();

  return (
    <div>
      {props.rows.length === 0 ? (
      <h1 styles={{textalign:'center'}}>No doctors found !</h1>):
      (
    
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">speciality</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.rows.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.num}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.lastname}</TableCell>
                  <TableCell align="right">{row.spec}</TableCell>
                  <TableCell align="right">
                  <Row style={{marginLeft:'5%'}}>
                    <Update p={row.num}/>
                    <Delete value={row.num} tp="delete_doctor"/>
                    </Row>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)}
      
    </div>
  );
}
