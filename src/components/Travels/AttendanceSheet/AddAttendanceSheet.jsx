import React, { useState } from 'react'
import { Row,Form,Col, Button } from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function AddAttendanceSheet() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [drivername,setDrivername] = useState('')
    const [vehiclenumber,setVehiclenumber] = useState('')
    const [attendance,setAttendance] = useState('')
  return (
    <div>
        <Form>
        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className="mt-1">
                          <Form.Label>Date</Form.Label>
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
                        <Col md='6'>
                <Row className='mt-1'>
                    <span>Driver Name</span>
                    <FormControl as={Col} md='12' size="small" className='mt-2' style={{paddingLeft:'10px',paddingRight:'10px'}}>
        {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
        <Select
          labelId="vehicle-type-label"
          id="vehicle-type"
          value={drivername}
          label="Driver name"
          onChange={(e)=>setDrivername(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="name1">Athul</MenuItem>
          <MenuItem value="name2">Amal</MenuItem>
          <MenuItem value="name3">Adicx</MenuItem>
        </Select>
      </FormControl>
                </Row>
                </Col>
                <Col md='6'>
                <Row className='mt-2'>
                    <span>Vehicle Number</span>
                    <FormControl as={Col} md='12' size="small" className='mt-2' style={{paddingLeft:'10px',paddingRight:'10px'}}>
        {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
        <Select
          labelId="vehicle-type-label"
          id="vehicle-type"
          value={vehiclenumber}
          label="Driver name"
          onChange={(e)=>setVehiclenumber(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="name1">KL-12-A-2333</MenuItem>
          <MenuItem value="name2">KL-12-A-2333</MenuItem>
          <MenuItem value="name3">KL-12-A-2333</MenuItem>
        </Select>
      </FormControl>
                </Row>
                </Col>
                <Col md='6'>
                <Row className='mt-2'>
                    <span>Attendance</span>
                    <FormControl as={Col} md='12' size="small" className='mt-2' style={{paddingLeft:'10px',paddingRight:'10px'}}>
        {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
        <Select
          labelId="vehicle-type-label"
          id="vehicle-type"
          value={attendance}
          label="Driver name"
          onChange={(e)=>setAttendance(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Present">Present</MenuItem>
          <MenuItem value="Leave">Leave</MenuItem>
          
        </Select>
      </FormControl>
                </Row>
                </Col>
        </Row>
        <Button className='mt-3'>SUBMIT</Button>
        </Form>
        
    </div>
  )
}
