import { Switch } from '@mui/joy';
import { ToggleButton } from '@mui/material';
import React from 'react'
import { Card, CardBody, Col, Form, Row } from 'react-bootstrap'

export default function ApplicationConfiguration() {
    const [selected, setSelected] = React.useState(false);
    const [dark, setDark] = React.useState(false);
    return (
        <div>
            <Card>
                <CardBody>
                    <Row >
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Ward Details</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Clergy</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Committee</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Gallery</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Notice</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Notification</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Banner</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Kurbana Time</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Family Login</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Blood Bank</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            />
                            </Col>


                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' className='mt-2'>
                            <Col><h6>Live Video</h6></Col>
                            <Col><Switch
                                color={dark ? 'success' : 'danger'}
                                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                                checked={dark}
                                onChange={(event) => setDark(event.target.checked)}
                                endDecorator={
                                    <span>{dark ? "on" : "off"}</span>
                                }
                            /></Col>


                        </Col>

                    </Row>
                </CardBody>
            </Card>





        </div>
    )
}
