/* eslint-disable prettier/prettier */
import React from 'react'
import { Form, Row, Col, Button, Accordion, InputGroup, Card } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import question6 from '../../assets/question 6.png';
import yourItems from '../../assets/yourItems.png';
import yourInterest from '../../assets/yourInterest.png';


import "./Profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch,faAngleDown, faAngleUp, faArrowDown, faArrowUp,faPlus, faEdit, faEllipsisH,faTags, faExternalLinkAlt, faEye, faTrashAlt,faQuestionCircle,faArrowRight,faHeart,} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

export default function Profile() {
  return (
    <div>
      <Row>
        <Col>
        <img
        src={profile}
        alt="Rounded Image"
        className="rounded-image"
        style={{ width: '200px', height: '200px' }}
      /></Col>
      <Col md='9'className='mt-5'>
      <Row >
        <span style={{fontWeight:"bold",fontSize:"30px"}}>Athul Ram</span>
      </Row>
      <Row >
        <span>athulram123@gmail.com</span>
      </Row>
      <Row>
        <Col className='mt-4'> <Button>Edit profile</Button></Col>

      </Row>
      </Col>
      </Row>
      <span style={{fontWeight:'bold',fontSize:'20px',marginTop:'20px',display: 'block'}} >Others</span>

      <Accordion defaultActiveKey="0" className='mt-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><div style={{display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
                    <div > <FontAwesomeIcon icon={faQuestionCircle} style={{width:'27px',height:'27px',marginRight:'40px'}}/></div>
      <div style={{ textAlign: 'center',}}><span style={{fontWeight:'bold',fontSize:'21px',fontFamily:'Jost, sans-serif'}}>Help</span></div>


      </div></Accordion.Header>
                    <Accordion.Body>
                        To facilitate the addition of new Featured Items, users can seamlessly accomplish this task by selecting
                        the appropriate role from a dropdown menu and subsequently filling in the corresponding fields with
                        relevant information.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

      <Accordion defaultActiveKey="0" className='mt-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><div style={{display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
      <div><img

        src={question6}
        style={{ width: '27px', height: '27px',marginRight:'40px' }}
      /></div>
      <div style={{ textAlign: 'center',}}><span style={{fontWeight:'bold',fontSize:'21px',fontFamily:'Jost, sans-serif'}}>Privacy Policy</span></div>


      </div></Accordion.Header>
                    <Accordion.Body>
                        To facilitate the addition of new Featured Items, users can seamlessly accomplish this task by selecting
                        the appropriate role from a dropdown menu and subsequently filling in the corresponding fields with
                        relevant information.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
      <Accordion defaultActiveKey="0" className='mt-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><div style={{display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
      <div><img

        src={yourItems}
        style={{ width: '27px', height: '27px',marginRight:'40px' }}
      /></div>
      <div style={{ textAlign: 'center',}}><span style={{fontWeight:'bold',fontSize:'21px',fontFamily:'Jost, sans-serif'}}>Your Items</span></div>


      </div></Accordion.Header>
                    <Accordion.Body>
                        To facilitate the addition of new Featured Items, users can seamlessly accomplish this task by selecting
                        the appropriate role from a dropdown menu and subsequently filling in the corresponding fields with
                        relevant information.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

      <Accordion defaultActiveKey="0" className='mt-2'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><div style={{display:'flex',justifyContent:'space-between', alignItems: 'center'}}>
      <div><img

        src={yourInterest}
        style={{ width: '27px', height: '27px',marginRight:'40px' }}
      /></div>
      <div style={{ textAlign: 'center',}}><span style={{fontWeight:'bold',fontSize:'21px',fontFamily:'Jost, sans-serif'}}>Your Interests</span></div>


      </div></Accordion.Header>
                    <Accordion.Body>
                        To facilitate the addition of new Featured Items, users can seamlessly accomplish this task by selecting
                        the appropriate role from a dropdown menu and subsequently filling in the corresponding fields with
                        relevant information.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
  )
}
