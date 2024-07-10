

import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@mui/material';
import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Notice() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/addnotice');
  }
  return (
    <div>
      <Button onClick={() => handleNavigate()}>Add Notice</Button>

      <Row style={{ padding: '10px' }}>
          <Col md='6' className='mt-3'>
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

              <Row style={{ padding: '15px', }}>

                <Col md='5' >
                  <Image src='\assets\empty-christian-church-building.jpg' rounded style={{ height: '100px', width: '150px' }} />
                </Col>
                <Col>
                 <Row >
                    <h6>Church Image</h6>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md='6' className='mt-3'>
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
              <Row style={{ padding: '15px' }}>
                <Col  md='5'>
                  <Image src='\assets\high-angle-hands-holding-holy-bible.jpg' rounded style={{ height: '100px', width: '150px' }} />
                </Col>
                <Col>
                 <Row >
                    <h6>Church Image</h6>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md='6' className='mt-3'>
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
              <Row style={{ padding: '15px' }}>

                <Col  md='5'>
                  <Image src='\assets\people-visiting-praying-church-building.jpg' rounded style={{ height: '100px', width: '150px' }} />
                </Col>
                <Col>
                 <Row >
                    <h6>Church Image</h6>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md='6' className='mt-3'>
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
              <Row style={{ padding: '15px' }}>
                <Col  md='5'>
                  <Image src='\assets\empty-christian-church-building.jpg' rounded style={{ height: '100px', width: '150px' }} />
                </Col>
                <Col>
                 <Row >
                    <h6>Church Image</h6>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>

        </Row>

    </div>
  )
}
