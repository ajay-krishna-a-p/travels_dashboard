


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
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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



export default function AttendanceSheet() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1');

  const handleAddNavigate = () => {
    navigate("/AddattendanceSheet")
  }
  const handleViewNavigate = () => {
    navigate("/ViewattendanceSheet")
  }
  const handleEditNavigate = () => {
    navigate("/EditattendanceSheet")
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Button className='mb-3' onClick={handleAddNavigate}>Add Document</Button>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Attendance Sheet" value="1" />
              <Tab label="Attendance Sheet Report" value="2" />

            </TabList>
          </Box>
          <TabPanel value="1">
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
                    <StyledTableCell align="left">Date</StyledTableCell>
                    <StyledTableCell>Vehicle Number</StyledTableCell>
                    <StyledTableCell align="left">Driver Name</StyledTableCell>

                    <StyledTableCell align="left">Amount</StyledTableCell>
                    <StyledTableCell align="left">Attendance</StyledTableCell>
                    <StyledTableCell align="left">View</StyledTableCell>
                    <StyledTableCell align="left">Edit</StyledTableCell>
                    <StyledTableCell align="left">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  <StyledTableRow >
                    <StyledTableCell align="left">16/07/2024</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      KL-11-A-12332
                    </StyledTableCell>
                    <StyledTableCell align="left">joji</StyledTableCell>

                    <StyledTableCell align="left">345567</StyledTableCell>
                    <StyledTableCell align="left">Present</StyledTableCell>
                    <StyledTableCell align="left"><Button onClick={handleViewNavigate}>View</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='success' style={{ color: 'white' }} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='danger'><span style={{ color: 'white' }}>Delete</span></Button></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell align="left">16/07/2024</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      KL-11-A-12332
                    </StyledTableCell>
                    <StyledTableCell align="left">joji</StyledTableCell>

                    <StyledTableCell align="left">345567</StyledTableCell>
                    <StyledTableCell align="left">Present</StyledTableCell>
                    <StyledTableCell align="left"><Button onClick={handleViewNavigate}>View</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='success' style={{ color: 'white' }} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='danger'><span style={{ color: 'white' }}>Delete</span></Button></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell align="left">16/07/2024</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      KL-11-A-12332
                    </StyledTableCell>
                    <StyledTableCell align="left">joji</StyledTableCell>

                    <StyledTableCell align="left">345567</StyledTableCell>
                    <StyledTableCell align="left">Present</StyledTableCell>
                    <StyledTableCell align="left"><Button onClick={handleViewNavigate}>View</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='success' style={{ color: 'white' }} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='danger'><span style={{ color: 'white' }}>Delete</span></Button></StyledTableCell>
                  </StyledTableRow>


                </TableBody>
              </Table>
            </TableContainer></TabPanel>
          <TabPanel value="2">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">SL.No</StyledTableCell>
                    <StyledTableCell>Driver Name</StyledTableCell>
                    <StyledTableCell align="left">Total Amount</StyledTableCell>

                    <StyledTableCell align="left">Leave</StyledTableCell>

                    
                    <StyledTableCell align="left">Edit</StyledTableCell>
                    <StyledTableCell align="left">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                <StyledTableRow >
                    <StyledTableCell align="left">1</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                     Stebin
                    </StyledTableCell>
                    <StyledTableCell align="left">34543</StyledTableCell>

                    <StyledTableCell align="left">87</StyledTableCell>
                    
                    
                    <StyledTableCell align="left"><Button variant='success' style={{ color: 'white' }} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='danger'><span style={{ color: 'white' }}>Delete</span></Button></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell align="left">2</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                     Stebin
                    </StyledTableCell>
                    <StyledTableCell align="left">34543</StyledTableCell>

                    <StyledTableCell align="left">87</StyledTableCell>
                    
                    
                    <StyledTableCell align="left"><Button variant='success' style={{ color: 'white' }} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='danger'><span style={{ color: 'white' }}>Delete</span></Button></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell align="left">3</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                     Stebin
                    </StyledTableCell>
                    <StyledTableCell align="left">34543</StyledTableCell>

                    <StyledTableCell align="left">87</StyledTableCell>
                    
                    
                    <StyledTableCell align="left"><Button variant='success' style={{ color: 'white' }} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
                    <StyledTableCell align="left"><Button variant='danger'><span style={{ color: 'white' }}>Delete</span></Button></StyledTableCell>
                  </StyledTableRow>


                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          

        </TabContext>
      </Box>

    </div>
  );
}
