/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, InputGroup, Toast, ToastContainer } from 'react-bootstrap';
import { faCircleDown } from "@fortawesome/free-regular-svg-icons/faCircleDown";

export default function Pdfoption({ handleDownload, handleExport,selectedOrientation, setSelectedOrientation,handleData, number1, number2, setNumber1, setNumber2 }) {
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);
   const handleOrientationChange = (e) => {
        const orientation = e.target.value;
        setSelectedOrientation(orientation);
        if (orientation === 'portrait') {
            setNumber1(210);
            setNumber2(297);
        } else {
            setNumber1(297);
            setNumber2(210);
        }
    };


    return (
        <div>
            <Row>
                <Col className="mb-2">
                    <Button onClick={toggleShowA} className="mb-2">
                        <FontAwesomeIcon icon={faCircleDown} />
                        <span style={{ marginLeft: '10px' }}>Download</span>
                    </Button>
                    <ToastContainer style={{ position: 'absolute', }}>
                        <Toast show={showA} onClose={toggleShowA}>
                            <Toast.Header>
                                <strong className="me-auto">Download</strong>
                            </Toast.Header>
                            <Toast.Body>
                                  <Form.Check
                                    type="radio"
                                    name="format"
                                    value="portrait"
                                    aria-label="radio 1"
                                    label='Portrait'
                                    checked={selectedOrientation === 'portrait'}
                                      onChange={handleOrientationChange}
                                />
                                <Form.Check
                                    type="radio"
                                    name="format"
                                    value="landscape"
                                    aria-label="radio 2"
                                    label='Landscape'
                                    checked={selectedOrientation === 'landscape'}
                                     onChange={handleOrientationChange}
                                />

                                <Row style={{ display: 'flex' }}>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                type="number"
                                                style={{ width: '20px', height: '30px' }}
                                                value={number1}
                                                onChange={(e) => setNumber1(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                type="number"
                                                style={{ width: '20px', height: '30px' }}
                                                value={number2}
                                                onChange={(e) => setNumber2(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Button onClick={handleDownload} style={{ borderRadius: '20px', fontSize: '10px' }}>Submit</Button>
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>

                <Col style={{ textAlign: 'right' }} className="mb-2">
                    <Button variant="success" style={{ color: 'white' }} onClick={handleExport}>
                        <FontAwesomeIcon icon={faFileExport} />
                        <span style={{ marginLeft: '10px' }}>Export</span>
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
