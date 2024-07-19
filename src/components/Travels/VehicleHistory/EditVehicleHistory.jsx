
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function EditAddVehicleHistory() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
        <Row>
        <Form.Group  controlId="validationCustom02" className="mt-2 mb-3">
          <Form.Label>Model Year</Form.Label>
          &nbsp;
          <DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  dateFormat="dd/MM/yyyy"
/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Vehicle Number</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter vehicle number"
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
                        <Form.Label>Kilometer</Form.Label>
                        <Form.Control
                           name='name'
                            type="number"
                            placeholder="Enter kilometer"
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
                    <Col className='mt-3'>
                    <Button>Update</Button>
                    </Col>
        </Row>
    </div>
  )
}
