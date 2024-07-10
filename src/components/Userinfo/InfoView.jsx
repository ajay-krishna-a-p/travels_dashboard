import React, { useState } from 'react';
import { Tab, Tabs, Box,Tooltip } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Row, Form, Button, ButtonGroup, InputGroup, Dropdown, Breadcrumb, Table, Spinner, Card, Pagination,Image, Badge } from 'react-bootstrap';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faPlus, faEdit, faEllipsisH, faTags, faExternalLinkAlt, faEye, faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import photo from '/public/assets/user_9797548.png';

 function InfoView() {
    const [value, setValue] = useState(0);
  const [lastVisible, setLastVisible] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

    
  const handlenavigate = () => {
      navigate('');
    };

    const location = useLocation();
    return (
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} 
          indicatorColor="primary" // Set the color of the indicator (the line beneath the active tab) to primary (blue)
          textColor="primary">
            <Tab label="Profile" 
            style={{ color: value === 0 ? '#0d6efd' : 'gray' }}/>
            <Tab label="Your Items" 
            style={{ color: value === 1 ? '#0d6efd' : 'gray' }}/>
            <Tab label="Your Settlement" 
            style={{ color: value === 2 ? '#0d6efd' : 'gray' }}/>
            <Tab label="Your Assets" 
            style={{ color: value === 3 ? '#0d6efd' : 'gray' }}/>  
               <Tab label="Message" 
            style={{ color: value === 4 ? '#0d6efd' : 'gray' }}/>  
    
          </Tabs>
          <TabPanel value={value} index={0}>
           
            <Row>
            <Col style={{textAlign:'right'}} className='mt-3 mb-3'>
  
  <Tooltip title="Edit">
  <Button
    variant="primary"
   style={{borderRadius:'50%',
   height:'40px',
   width:'40px',
   justifyContent:'center',
   alignItems:'center'}}
  
  >
    <FontAwesomeIcon icon={faPen} />
  </Button>
</Tooltip>
</Col>
            </Row>
         
            <Card border="light" className="table-wrapper table-responsive shadow-sm">
              
              <Card.Body className="pt-0">
                
              <Row className='mt-3'>
              
              <Col xs={6} md={4} className='mb-3'>
          <Image src={location.state.data.photoURL?location.state.data.photoURL:photo} style={{width:'80px',height:'80px'}} roundedCircle />
       
        </Col>
<Table  striped bordered  size="xl"  >
      <thead>
        <tr>
         
          <th>Name</th>
          <th>{location.state.data.name?location.state.data.name:"N/A"} </th>
       
        </tr>
      </thead>
      <tbody  >
        <tr>
        
          <td>Mobile No:</td>
          <td>{location.state.data.mobile?location.state.data.mobile:"N/A"}</td>
         
        </tr>
        <tr>
          
          <td>Place </td>
          <td>{location.state.data.place?location.state.data.place:'N/A'}</td>
     
        </tr>

 <tr>
          
          <td>Email </td>
          <td>{location.state.data.email?location.state.data.email:'N/A'}</td>
     
        </tr>
        <tr>
          
          <td>Country </td>
          <td>{location.state.data.country?location.state.data.country:'N/A'}</td>
     
        </tr>

         <tr>
          
          <td>State</td>
          <td>{location.state.data.state?location.state.data.state:'N/A'}</td>
     
        </tr>
        <tr>
          
          <td>Created Date </td>
          <td>{location.state.data.createdAt?new Date(location.state.data.createdAt.seconds*1000).toLocaleDateString():'N/A'}</td>
     
        </tr>
         
         <tr>
          <td>Last Name </td>
          <td> {location.state.data.last_name?location.state.data.last_name:'N/A'}</td>
        </tr>

        
         {/* <tr>
          <td>Photo </td>
          <td><img src={location.state.data.photoURL?location.state.data.photoURL:""} alt="photo"/></td>
        </tr> */}

         <tr>
          <td> Enrollement ID </td>
          <td> {location.state.data.enrollement_id?location.state.data.enrollement_id:'N/A'}</td>
        </tr>

        

       

       
      </tbody>
    </Table>
       
         </Row>
                {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Pagination className="mb-2 mb-lg-0">
                    <Pagination.Prev
    
                    >
                      Previous
                    </Pagination.Prev>
    
                    <Pagination.Next >
                      Next
                    </Pagination.Next>
    
    
                  </Pagination>
                </Card.Footer> */}
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Card border="light" className="table-wrapper table-responsive shadow-sm">
              <Card.Body className="pt-0">
                <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
                  <thead>
                    <tr>
                      <th className="border-bottom" >#</th>
                      <th className="border-bottom" >Date</th>
                      <th className="border-bottom" >Item Name</th>
                      <th className="border-bottom" >Item ID</th>
                      <th className="border-bottom" >Item Title</th>
                      <th className="border-bottom" >Details</th>
                     
    
                    </tr>
                  </thead>
                  <tbody>
    
                      <tr >
                        <td>1</td>
    
                        <td>Demo text1</td>
                        <td>Demo text2</td>
                        <td>Demo text3</td>
                        <td>Demo text4</td>
                        <td><Button variant="success">View</Button></td>
                     
    
    
    
                      </tr>
    
                  </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Pagination className="mb-2 mb-lg-0">
                    <Pagination.Prev
    
                    >
                      Previous
                    </Pagination.Prev>
    
                    <Pagination.Next >
                      Next
                    </Pagination.Next>
    
    
                  </Pagination>
                </Card.Footer>
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Card border="light" className="table-wrapper table-responsive shadow-sm">
              <Card.Body className="pt-0">
                <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
                  <thead>
                    <tr>
                      <th className="border-bottom" >#</th>
                      <th className="border-bottom" >Date</th>
                      <th className="border-bottom" >Product Name</th>
                      <th className="border-bottom" >Item Name</th>
                      <th className="border-bottom" >Item ID</th>
                      <th className="border-bottom" >Amount</th>
                      <th className="border-bottom" >Details</th>
    
                    </tr>
                  </thead>
                  <tbody>
    
                      <tr >
                        <td>1</td>
    
                        <td>Demo text1</td>
                        <td>Demo text2</td>
                        <td>Demo text3</td>
                        <td>Demo text4</td>
                        <td>Demo text5</td>
                        <td><Button variant="success">View</Button></td>
                     
    
    
    
                      </tr>
    
                  </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Pagination className="mb-2 mb-lg-0">
                    <Pagination.Prev
    
                    >
                      Previous
                    </Pagination.Prev>
    
                    <Pagination.Next >
                      Next
                    </Pagination.Next>
    
    
                  </Pagination>
                </Card.Footer>
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <Card border="light" className="table-wrapper table-responsive shadow-sm">
              <Card.Body className="pt-0">
                <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
                  <thead>
                    <tr>
                      <th className="border-bottom" >#</th>
                      <th className="border-bottom" >Date</th>
                      <th className="border-bottom" >Product Name</th>
                      <th className="border-bottom" >Category Name</th>
                      <th className="border-bottom" >Item Name</th>
                      <th className="border-bottom" >Amount</th>
                      <th className="border-bottom" >Details</th>
    
                    </tr>
                  </thead>
                  <tbody>
    
                      <tr >
                        <td>1</td>
    
                        <td>Demo text1</td>
                        <td>Demo text2</td>
                        <td>Demo text3</td>
                        <td>Demo text4</td>
                        <td>Demo text5</td>
                        <td><Button variant="success">View</Button></td>
                     
    
    
    
                      </tr>
    
                  </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Pagination className="mb-2 mb-lg-0">
                    <Pagination.Prev
    
                    >
                      Previous
                    </Pagination.Prev>
    
                    <Pagination.Next >
                      Next
                    </Pagination.Next>
    
    
                  </Pagination>
                </Card.Footer>
              </Card.Body>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={4}>

          <Card
         
            style={{ cursor: "pointer",borderRadius:'15px' }}
            className="mt-4"
          >
            <Row
              style={{
                justifyContent: "start",
                padding: "10px",
              }}
            >
              <Col>
                <Image
                  // src={message.data.photoURL ? message.data.photoURL : ""}
                  roundedCircle
                  style={{ width: "100px", height: "100px", padding: "10px" }}
                />
              </Col>
              <Col md="7" style={{ alignContent: "center" }}>
                <Row>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Item Title
                    </span>
                  </div>
                </Row>
                <Row>
                  <div>Place</div>
                </Row>
              </Col>

              <Col
                style={{
                  alignContent: "center",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Col>
                    <Badge
                      style={{
                        height:"25px",
                        alignContent: "center",
                      }}
                    >
                     234
                    </Badge>
                  </Col>
                </div>
              </Col>

            </Row>
          </Card>
     
</TabPanel>
        </Box>
      );
}
function TabPanel({ children, value, index }) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
        {value === index && (
          <Box sx={{ p: 4 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  export default InfoView;