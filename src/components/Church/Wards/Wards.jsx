import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@mui/material'
import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap'
import { Switch } from '@mui/joy';
import { useNavigate } from 'react-router-dom'
export default function Wards() {
  const [dark, setDark] = React.useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/addward');
  }
  return (
    <div>
      <Button onClick={()=>handleNavigate()}>Add Ward</Button>
      <Row className='mt-4'>
        <Col md='6'>
        <div style={{ textAlign: 'right' }}>
              <Tooltip title='Edit'>
                <FontAwesomeIcon icon={faPencil} style={{ fontSize: '12px' }} />
              </Tooltip>
              &nbsp;&nbsp;&nbsp;
              <Tooltip title="Delete" >
                <FontAwesomeIcon icon={faTrash} />
              </Tooltip>
            </div>
        <Card>
        <CardBody>
        <Row>
        <Col><h6>Ward Name</h6></Col>
        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' >
                            
                          
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
        </CardBody>
      </Card>
        </Col>
        <Col>
        <div style={{ textAlign: 'right' }}>
              <Tooltip title='Edit'>
                <FontAwesomeIcon icon={faPencil} style={{ fontSize: '12px' }} />
              </Tooltip>
              &nbsp;&nbsp;&nbsp;
              <Tooltip title="Delete" >
                <FontAwesomeIcon icon={faTrash} />
              </Tooltip>
            </div>
        <Card>
        <CardBody>
        <Row>
        <Col><h6>Ward Name</h6></Col>
        <Col style={{ display: 'flex', flexDirection: 'row' }} md='3' >
                            
                          
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
        </CardBody>
      </Card>
        </Col>
      </Row>
    </div>
  )
}
