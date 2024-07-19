import { Textarea } from '@mui/joy'
import React from 'react'
import { useState } from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

export default function AddMaintananceHistory() {
    const [selectedDate, setSelectedDate] = useState(new Date())
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

  const handleRemoveImage = () => {
    setImage(null);
  };
  return (
    <div>
        <Form.Group as={Col} md='3'  controlId="validationCustom02" className="mt-1" style={{width:'200px'}}>
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
        <Row>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Vehicle Number</Form.Label>
                        <Form.Control
                           name='name'
                            type="email"
                            placeholder="Enter vehicle number"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'100%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Vehicle Model</Form.Label>
                        <Form.Control
                           name='name'
                            type="email"
                            placeholder="Enter Vehicle Model"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'100%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Maintanance Part</Form.Label>
                        <Form.Control
                           name='name'
                            type="email"
                            placeholder="Enter Maintanance Part"
                            // value={ItemData.name}
                            // onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'100%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Comment</Form.Label>
                        <InputGroup className="mb-3">

                <Form.Control
                    type="text"
                    as="textarea"
                    style={{ minWidth: '100px' }}
                />
            </InputGroup>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <span className='mt-2'>Bill Image</span>
      <Row style={{ padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
        <Card style={{ padding: '10px', borderWidth: '2px', borderColor: 'black' }}>
          <Row>
            <Col style={{ alignContent: 'center' }}>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </Col>
            {image && (
              <Col style={{textAlign:'right'}}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src={image}
                    alt="Uploaded"
                    style={{ marginTop: '10px', width: '150px', height: '100px' }}
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleRemoveImage}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '5px',
                      borderRadius: '50%'
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} size="1x" />
                  </Button>
                </div>
              </Col>
            )}
          </Row>
        </Card>
      </Row>
        </Row>
    </div>
  )
}
