import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,
  Container,
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import Avatar from "@material-ui/core/Avatar";
import Jules from "../assets/jules.jpg";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
const columns = [
  { id: "date", label: "Pain date", minWidth: 170 },
  { id: "doctor", label: "Doctor", minWidth: 100 },
];

function createData(date, doctor) {
  return { date, doctor };
}

const rows = [
  createData("21/02/2020", "borgdena"),
  createData("20/02/2020", "ff"),
  createData("20/01/2000", "wael"),
  createData("20/12/2019", "dah"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "7%",
  },
  container: {
    maxHeight: 440,
  },
});
const useStylesAv = makeStyles((theme) => ({
  root: {
    marginLeft: "20%",
    marginTop: "3%",
    display: "flex",
    "& > *": {},
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
export default function Client() {
  const classes = useStyles();
  const classesAv = useStylesAv();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pain History</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search for a client</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Grid container spacing={1}>
        <Grid item xs={1} style={{marginLeft:'15%'}}>
          <Avatar
            style={{ marginLeft: "25%", marginTop: "25%" }}
            alt="Remy Sharp"
            src={Jules}
            className={classesAv.large}
          />
          </Grid>
          <Grid item xs={3} style={{ marginLeft: "12%", marginTop: "5%",}}>
          <h2 >
            Jules Caeser | ID : 000001 
          </h2>
        </Grid>
      </Grid>
      <Container>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
}
