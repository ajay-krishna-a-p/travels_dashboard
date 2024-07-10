
import { Switch } from '@mui/joy';
import React from 'react'
import { Form, Row,Col } from 'react-bootstrap'

export default function AddUsers() {
    const [dark, setDark] = React.useState(false);
  return (
    <div>
        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter name"
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
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                           name='name'
                            type="number"
                            placeholder="Enter name"
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
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter name"
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
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter name"
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
                    <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-3'>
                            
                          
                           <span>Status</span> 
                            &nbsp;
                            <Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            />


                        </Col>
        </Row>
    </div>
  )
}
