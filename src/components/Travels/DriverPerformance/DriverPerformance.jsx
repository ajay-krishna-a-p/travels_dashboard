


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Col } from 'react-bootstrap';
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



export default function DriverPerformance() {

  const navigate = useNavigate();

  const handleAddNavigate = () => {
    navigate("/AddDriverPerformance")
  }
  const handleViewNavigate = () => {
    navigate("/ViewDriverPerformance")
  }
  const handleEditNavigate = () => {
    navigate("/EditDriverPerformance")
  } 
  return (
    <div>
      <Button className='mb-3' onClick={handleAddNavigate}>ADD DOCUMENT</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{textWrap:'nowrap'}}>Vehicle Statement</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Driver Name</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Vehicle Model</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Total Earnings</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Total Collection</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>AMT To/From Uber</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Total Rent</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Add.K/M Charges</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Net Profit</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Total KM</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Max. Speed</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Total Expense</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Total Leave</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>CC Amount</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Final Balance</StyledTableCell>
            <StyledTableCell align="left" style={{textWrap:'nowrap'}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                KL-11-A-12332
              </StyledTableCell>
              <StyledTableCell align="left">Ajay</StyledTableCell>
              <StyledTableCell align="left">Sedan</StyledTableCell>
              <StyledTableCell align="left">654347</StyledTableCell>
              <StyledTableCell align="left">12342</StyledTableCell>
              <StyledTableCell align="left">23443</StyledTableCell>
              <StyledTableCell align="left">54345</StyledTableCell>
              <StyledTableCell align="left">234</StyledTableCell>
              <StyledTableCell align="left">65453</StyledTableCell>
              <StyledTableCell align="left">3454.6</StyledTableCell>
              <StyledTableCell align="left">45</StyledTableCell>
              <StyledTableCell align="left">10234</StyledTableCell>
              <StyledTableCell align="left">6.5</StyledTableCell>
              <StyledTableCell align="left">6234</StyledTableCell>
              <StyledTableCell align="left">2343</StyledTableCell>
              <StyledTableCell align="left"><Col style={{display:'flex',flexDirection:'row'}}>&nbsp;<Button onClick={handleViewNavigate}>View</Button>&nbsp;<Button variant='success' style={{color:'white'}} onClick={handleEditNavigate}>Edit</Button>&nbsp;<Button variant='danger'><span style={{color:'white'}}>Delete</span></Button></Col></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                KL-11-A-12332
              </StyledTableCell>
              <StyledTableCell align="left">Ajay</StyledTableCell>
              <StyledTableCell align="left">Sedan</StyledTableCell>
              <StyledTableCell align="left">654347</StyledTableCell>
              <StyledTableCell align="left">12342</StyledTableCell>
              <StyledTableCell align="left">23443</StyledTableCell>
              <StyledTableCell align="left">54345</StyledTableCell>
              <StyledTableCell align="left">234</StyledTableCell>
              <StyledTableCell align="left">65453</StyledTableCell>
              <StyledTableCell align="left">3454.6</StyledTableCell>
              <StyledTableCell align="left">45</StyledTableCell>
              <StyledTableCell align="left">10234</StyledTableCell>
              <StyledTableCell align="left">6.5</StyledTableCell>
              <StyledTableCell align="left">6234</StyledTableCell>
              <StyledTableCell align="left">2343</StyledTableCell>
              <StyledTableCell align="left"><Col style={{display:'flex',flexDirection:'row'}}>&nbsp;<Button onClick={handleViewNavigate}>View</Button>&nbsp;<Button variant='success' style={{color:'white'}} onClick={handleEditNavigate}>Edit</Button>&nbsp;<Button variant='danger'><span style={{color:'white'}}>Delete</span></Button></Col></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                KL-11-A-12332
              </StyledTableCell>
              <StyledTableCell align="left">Ajay</StyledTableCell>
              <StyledTableCell align="left">Sedan</StyledTableCell>
              <StyledTableCell align="left">654347</StyledTableCell>
              <StyledTableCell align="left">12342</StyledTableCell>
              <StyledTableCell align="left">23443</StyledTableCell>
              <StyledTableCell align="left">54345</StyledTableCell>
              <StyledTableCell align="left">234</StyledTableCell>
              <StyledTableCell align="left">65453</StyledTableCell>
              <StyledTableCell align="left">3454.6</StyledTableCell>
              <StyledTableCell align="left">45</StyledTableCell>
              <StyledTableCell align="left">10234</StyledTableCell>
              <StyledTableCell align="left">6.5</StyledTableCell>
              <StyledTableCell align="left">6234</StyledTableCell>
              <StyledTableCell align="left">2343</StyledTableCell>
              <StyledTableCell align="left"><Col style={{display:'flex',flexDirection:'row'}}>&nbsp;<Button onClick={handleViewNavigate}>view</Button>&nbsp;<Button variant='success' style={{color:'white'}} onClick={handleEditNavigate}>Edit</Button>&nbsp;<Button variant='danger'><span style={{color:'white'}}>Delete</span></Button></Col></StyledTableCell>
              
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
