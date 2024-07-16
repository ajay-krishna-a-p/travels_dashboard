
import { Textarea } from '@mui/joy'
import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Form, Row } from 'react-bootstrap'
export default function AddDriverDocument() {
    const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setImage(base64String);
      localStorage.setItem('uploadedImage', base64String);
    };

    reader.readAsDataURL(file);
  };
  return (
    
          <div>
        <Card className='mb-3'>
            <CardBody>
                <Row>
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Driver Name</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter driver name"
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
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                           name='name'
                            type="email"
                            placeholder="Enter email"
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
                        <Form.Label>Driver Contact Number</Form.Label>
                        <Form.Control
                           name='name'
                            type="number"
                            placeholder="Enter contact number"
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
                        <Form.Label>Alternate Number</Form.Label>
                        <Form.Control
                           name='name'
                            type="number"
                            placeholder="Enter number"
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
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter address"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            as="textarea"
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
                <span className='mb-2'>Driver Image</span>   
          <Row style={{padding:'10px'}}>
          
            <Card style={{padding:'10px',borderWidth:'2px',borderColor:'black'}}>
           <Row>
           <Col style={{alignContent:'center'}}> <input type="file" accept="image/*" onChange={handleImageUpload} /></Col>
           {image && <img src={image} alt="Uploaded" style={{ marginTop: '10px', width: '150px', height: '100px' }} />}
           </Row>
            </Card>
         
          </Row>
          <span className='mb-2'>License Copy</span>   
          <Row style={{padding:'10px'}}>
          
            <Card style={{padding:'10px',borderWidth:'2px',borderColor:'black'}}>
           <Row>
           <Col style={{alignContent:'center'}}> <input type="file" accept="image/*" onChange={handleImageUpload} /></Col>
           {image && <img src={image} alt="Uploaded" style={{ marginTop: '10px', width: '150px', height: '100px' }} />}
           </Row>
            </Card>
         
          </Row>
          <span className='mb-2'>Aadhar Copy</span>   
          <Row style={{padding:'10px'}}>
          
            <Card style={{padding:'10px',borderWidth:'2px',borderColor:'black'}}>
           <Row>
           <Col style={{alignContent:'center'}}> <input type="file" accept="image/*" onChange={handleImageUpload} /></Col>
           {image && <img src={image} alt="Uploaded" style={{ marginTop: '10px', width: '150px', height: '100px' }} />}
           </Row>
            </Card>
         
          </Row>
         <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           name='name'
                            type="password"
                            placeholder="Enter password"
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
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                           name='name'
                            type="password"
                            placeholder="Confirm Password"
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
