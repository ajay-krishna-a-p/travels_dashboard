
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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



export default function DriverDocuments() {

  const navigate = useNavigate();

  const handleAddNavigate = () => {
    navigate("/AddDriverDocuments")
  }
  const handleViewNavigate = () => {
    navigate("/ViewDriverDocuments")
  }
  const handleEditNavigate = () => {
    navigate("/EditDriverDocument")
  } 
  return (
    <div>
      <Button className='mb-3' onClick={handleAddNavigate}>Add Document</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Driver Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Contact</StyledTableCell>
            <StyledTableCell align="left">View</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                Ajay
              </StyledTableCell>
              <StyledTableCell align="left">ajaykenmerk@gmail.com</StyledTableCell>
              <StyledTableCell align="left">8765432190</StyledTableCell>
              <StyledTableCell align="left"><Button onClick={handleViewNavigate}>View</Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant='success' style={{color:'white'}} onClick={handleEditNavigate}>Edit</Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant='danger'><span style={{color:'white'}}>Delete</span></Button></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                Ajay
              </StyledTableCell>
              <StyledTableCell align="left">ajaykenmerk@gmail.com</StyledTableCell>
              <StyledTableCell align="left">8765432190</StyledTableCell>
              <StyledTableCell align="left"><Button>View</Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant='success' style={{color:'white'}}>Edit</Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant='danger'><span style={{color:'white'}}>Delete</span></Button></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                Ajay
              </StyledTableCell>
              <StyledTableCell align="left">ajaykenmerk@gmail.com</StyledTableCell>
              <StyledTableCell align="left">8765432190</StyledTableCell>
              <StyledTableCell align="left"><Button>View</Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant='success' style={{color:'white'}}>Edit</Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant='danger'><span style={{color:'white'}}>Delete</span></Button></StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
