
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function AddVehicleDocuments() {
    
    const [vehicleType, setVehicleType] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (event) => {
      setVehicleType(event.target.value);
    };
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value.toUpperCase());
    };
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
                <Col md='6'>
                <Row>
                    <span>Vehicle Type</span>
                    <FormControl as={Col} md='12' size="small" className='mt-2' style={{paddingLeft:'10px',paddingRight:'10px'}}>
        {/* <InputLabel id="vehicle-type-label">Vehicle Type</InputLabel> */}
        <Select
          labelId="vehicle-type-label"
          id="vehicle-type"
          value={vehicleType}
          label="Vehicle Type"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Hatchback">Hatchback</MenuItem>
          <MenuItem value="Sedan">Sedan</MenuItem>
          <MenuItem value="SUV">SUV</MenuItem>
        </Select>
      </FormControl>
                </Row>
                </Col>
               <Col>
               <span>Vehicle Number</span>
       
               <Form.Group as={Col}  controlId="validationCustom02" className='mt-2'>
                        
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter number"
                            value={inputValue}
                            onChange={handleInputChange}
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
               </Col>
               <span className='mt-2'>RC(optional)</span>
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
      <span className='mt-2'>Insurance(optional)</span>
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
      <span className='mt-2'>Pollution(optional)</span>
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
      <span className='mt-2'>Vehicle Image(optional)</span>
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
      <Col className='mb-3'><Button>Submit</Button>  </Col>    
            </Row>
           
        </div>
     
    );
  };