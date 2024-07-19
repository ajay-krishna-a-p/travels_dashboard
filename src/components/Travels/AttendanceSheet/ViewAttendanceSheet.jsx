


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ViewAttendanceSheet() {

  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div>
      <Row className='mb-3'>
          
          <Form.Group as={Col} md='3'  controlId="validationCustom02" className="mt-1" style={{width:'200px'}}>
                          <Form.Label>Start date</Form.Label>
                          <Form.Control
                            name="dateofBirth"
                            type="date"
                            placeholder="Enter ID"
                            value={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            required
                            style={{
                              resize: 'none',
                              display: 'flex',
                              verticalAlign: 'bottom',
                              width: '96%',
                              height:'42px'
                            }}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Col  style={{width:'200px',display:'flex',flexDirection:'row'}}>
                        <Form.Group   controlId="validationCustom02" className="mt-1" >
                          <Form.Label>End date</Form.Label>
                          <Form.Control
                            name="dateofBirth"
                            type="date"
                            placeholder="Enter ID"
                            value={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            required
                            style={{
                              resize: 'none',
                              display: 'flex',
                              verticalAlign: 'bottom',
                              width: '96%',
                              height:'42px'
                            }}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <div style={{paddingTop:'38px'}}><Button>Sort</Button></div>
          </Col>
          </Row>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="left">Driver Name</StyledTableCell>
            <StyledTableCell align="left">Vehicle Number</StyledTableCell>
            <StyledTableCell align="left">Amount </StyledTableCell>
            <StyledTableCell align="left">Attendance </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                16/07/2024
              </StyledTableCell>
              <StyledTableCell align="left">Joji</StyledTableCell>
              <StyledTableCell align="left">KL-11-A-12332</StyledTableCell>
              <StyledTableCell align="left">34555</StyledTableCell>
              <StyledTableCell align="left">Present</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                16/07/2024
              </StyledTableCell>
              <StyledTableCell align="left">Joji</StyledTableCell>
              <StyledTableCell align="left">KL-11-A-12332</StyledTableCell>
              <StyledTableCell align="left">34555</StyledTableCell>
              <StyledTableCell align="left">Present</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                16/07/2024
              </StyledTableCell>
              <StyledTableCell align="left">Joji</StyledTableCell>
              <StyledTableCell align="left">KL-11-A-12332</StyledTableCell>
              <StyledTableCell align="left">34555</StyledTableCell>
              <StyledTableCell align="left">Present</StyledTableCell>
            </StyledTableRow>
           
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
