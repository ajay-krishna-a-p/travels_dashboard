import { Textarea } from '@mui/joy'
import { Box, FormControl } from '@mui/material'
import React from 'react'
import { Accordion, Button, Card, Form, InputGroup } from 'react-bootstrap'

export default function Content() {
  return (
    <div>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Help</Accordion.Header>
            <Accordion.Body>
               <Card className='mb-2'><span style={{padding:'10px'}}>Help Text</span></Card>
            <InputGroup className="mb-3">
                 
                 <Form.Control
               type="text"
               as="textarea"
               style={{minWidth:'200px'}}
       />
               </InputGroup>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <Accordion defaultActiveKey="0" className='mt-2'>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Privacy Policy</Accordion.Header>
            <Accordion.Body>
            <Card className='mb-2'><span style={{padding:'10px'}}>Privacy Policy Text</span></Card>
            <InputGroup className="mb-3">
                 
                 <Form.Control
               type="text"
               as="textarea"
               style={{minWidth:'200px'}}
       />
               </InputGroup>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <div className='mt-2' style={{textAlign:'right'}}><Button>Submit</Button></div>
   
    </div>
  )
}
