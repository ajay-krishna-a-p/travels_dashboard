

import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Form, Row } from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function EditDriverPerformance() {
    const [startDate, setStartDate] = useState(new Date());
    const [drivername, setDrivername] = useState('');
    const [vehiclenumber, setVehiclenumber] = useState('');
    const handleChange = (event) => {
        setDrivername(event.target.value);
      };
      const handleChangeVehiclenumber = (event) => {
        setVehiclenumber(event.target.value);
      };
  return (
    <div>
      <Card className='mb-3'>
        <CardBody>
        <Row>
        <Form.Group  controlId="validationCustom02" className="mt-2 mb-3">
          <Form.Label>Date</Form.Label>
          &nbsp;
          <DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  dateFormat="dd/MM/yyyy"
/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Col md='6'>
                <Row>
                    <span>Driver Name</span>
                    <FormControl as={Col} md='12' size="small" className='mt-2' style={{paddingLeft:'10px',paddingRight:'10px'}}>
        {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
        <Select
          labelId="vehicle-type-label"
          id="vehicle-type"
          value={drivername}
          label="Driver name"
          onChange={handleChange}
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
                <Row>
                    <span>Vehicle Number</span>
                    <FormControl as={Col} md='12' size="small" className='mt-2' style={{paddingLeft:'10px',paddingRight:'10px'}}>
        {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
        <Select
          labelId="vehicle-type-label"
          id="vehicle-type"
          value={vehiclenumber}
          label="Vehicle Number"
          onChange={handleChangeVehiclenumber}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="number1">KL-12-A-4323</MenuItem>
          <MenuItem value="number2">KL-12-A-4323</MenuItem>
          <MenuItem value="number3">KL-12-A-4323</MenuItem>
        </Select>
      </FormControl>
                </Row>
                </Col>
                <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Sedan"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%',
                                color:'black'
                            }}
                            disabled
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Total Earnings</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter total earnings"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Total Collection</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter total collection"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>AMT To/From Uber</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter AMT To/From Uber"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Total Rent</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter Total Rent"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Add.K/M Charges</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter Add.K/M Charges"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Net Profit</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter net profit"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Total KM</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter Total KM"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Max. Speed</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter max. speed"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Total Expense</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter total expense"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Total Leave</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter total leave"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>CC Amount</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter CC Amount"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Final Balance</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter Final Balance"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
        </Row>
        </CardBody>
      </Card>
      <Button className='mb-3'>UPDATE</Button>
    </div>
  )
}
