import React from 'react'
import { Button, Card, CardBody, Col, Form, Row } from 'react-bootstrap'

export default function AddWard() {
  return (
    <div>
        <Card>
            <CardBody>
                <Row>
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Ward Name</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter ward name"
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
                        <Form.Label>Ward Number</Form.Label>
                        <Form.Control
                           name='name'
                            type="number"
                            placeholder="Enter ward number"
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
                        <Form.Label>Total Houses</Form.Label>
                        <Form.Control
                           name='name'
                            type="number"
                            placeholder="Enter total houses"
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
                        <Form.Label>Ward Representative 1</Form.Label>
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
                        <Form.Label>Ward Representative 2</Form.Label>
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
                   
                </Row>
                <Button className='mt-3'>Submit</Button>
            </CardBody>
        </Card>
    </div>
  )
}
