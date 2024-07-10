/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { Col, Row, Table,Button,Image, Card,Badge,Pagination } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import './Button.css';
import { Tab, Tabs, Box,Tooltip, Chip } from '@mui/material';
import "./Message.css";
import "./Button.css";
import { useNavigate } from "react-router-dom";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../Config/Config";
 function ProductrequestViewdetails() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const handleNavigate = (message) => {
    navigate("/viewusermessage",{state:{
        product: message
    }});
  };

  const [Message, setMessage] = useState([]);
  useEffect(() => {
    handleQuery();

  }, []);

  const handleQuery = () => {
    if(location.state.data.response==="active"){
     const q = query(
      collection(db, "product-messages"),
      orderBy("date", "desc"),
      where("product_id","==",location.state.id)
    );
    setMessage(null);
    fetchData(q);
    }

  };
  const fetchData = async (q) => {
    setMessage(null);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setMessage(newData);
    });
  };

  const handlesubmit=(value)=>{

  }
  const response = location.state.data.response || 'N/A';
  const chipColor = getChipColor(response);
  return (

    <div>

<Box sx={{ width: '100%' }}>
<Tabs value={value} onChange={handleChange}
indicatorColor="primary" // Set the color of the indicator (the line beneath the active tab) to primary (blue)
textColor="primary">
  <Tab label="Info"
  style={{ color: value === 0 ? '#0d6efd' : 'gray' }}/>

  {location.state.data.response==="active"&&
  <Tab label="Messages"
  style={{ color: value === 1 ? '#0d6efd' : 'gray' }}/>
}

</Tabs>
<TabPanel value={value} index={0}>


  <Card border="light" className="table-wrapper table-responsive shadow-sm">
    <Card.Body className="pt-0">
    
    <Row className='mt-3'>
    <Row>
      <Col>
      <Chip  label={response}
      color={chipColor}  ></Chip>
     
     </Col>
     <Col style={{textAlign:'right'}}>
     <Chip label={<Col>Created Date: {location.state.data.createdAt?new Date(location.state.data.createdAt.seconds*1000).toLocaleDateString():'N/A'}</Col>}  color="primary" variant="outlined" ></Chip>
     &nbsp; &nbsp;
     <Chip label={<Col>Last Updated: {location.state.data.last_updated?new Date(location.state.data.last_updated.seconds*1000).toLocaleDateString():'N/A'}</Col>}  color="primary" variant="outlined" ></Chip>
     </Col>
     </Row>
              <Col xs={6} md={4} className='mb-3'>


        </Col>
<Table  striped bordered  size="xl"  >
      <thead>

        <tr>

          <th ><span style={{textWrap:'nowrap'}}>User Name</span></th>
          <th>{location.state.data.userName?location.state.data.userName:"N/A"} </th>

        </tr>

      </thead>
      <tbody  >
        <tr>

          <td>Mobile No:</td>
          <td>{location.state.data.userMobile?location.state.data.userMobile:"N/A"}</td>

        </tr>
        <tr>

          <td>Place </td>
          <td>{location.state.data.place?location.state.data.place:'N/A'}</td>

        </tr>

 <tr>

          <td>State </td>
          <td>{location.state.data.state?location.state.data.state:'N/A'}</td>

        </tr>
        <tr>

          <td>Country </td>
          <td>{location.state.data.country?location.state.data.country:'N/A'}</td>

        </tr>



         <tr >
          <td >Desc </td>
          <td ><Col>{location.state.data.desc?location.state.data.desc:'N/A'}</Col></td>
        </tr>
         <tr>
          <td>Discription</td>
          <td> {location.state.data.discription?location.state.data.discription:'N/A'}</td>
        </tr>


        <tr>
          <td>Featured</td>
          <td>{location.state.data.featured?location.state.data.featured:'false'}</td>
        </tr>
        <tr>
          <td>Item ID</td>
          <td>{location.state.data.item_id?location.state.data.item_id:'N/A'}</td>
        </tr>
        <tr>
          <td>Item Name</td>
          <td>{location.state.data.item_name?location.state.data.item_name:'N/A'}</td>
        </tr>
        <tr>
          <td>Item Title</td>
          <td>{location.state.data.item_title?location.state.data.item_title:'N/A'}</td>
        </tr>



        <tr>
          <td>Like</td>
          <td>{location.state.data.like.length}</td>
        </tr>
         <tr>
        <td>Interested</td>
        <td>{location.state.data.length}</td>
       </tr>
        <tr>
          <td>Price</td>
          <td>{location.state.data.price?location.state.data.price:'N/A'}</td>
        </tr>
        {/* <tr>
          <td>Specifications</td>
          <td>   {Object.keys(location.state.data.specifications).map((key) => (
              <Row key={key}>
                <Col>{`${key}: ${location.state.data.specifications[key]}`}</Col>
              </Row>
            ))}</td>
        </tr> */}
        <tr>
          <td>Type</td>
          <td>{location.state.data.type?location.state.data.type:"N/A"}</td>
        </tr>
        <tr>

          <td>Images</td>
          <td> {location.state.data.images.map((key,index)=>

       <Image src={key}   style={{height:'250px',width:'250px',marginLeft:'10px'}} className='mt-2 mb-2' rounded/>
    )}</td>

        </tr>
      </tbody>
    </Table>
    <Row className='mt-4 mb-4'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ marginRight: '10px', }}>
                        <Button

                            variant={'success'}
                            onClick={()=>handlesubmit("active")}
                            style={{color:'white',fontSize:'13px',fontWeight:'bold'}}

                        >
                            Accept
                        </Button>
                    </div>
                    <Button

                        variant={ 'danger'}
 onClick={()=>handlesubmit("rejected")}
                        style={{color:'white',fontSize:'13px',fontWeight:'bold'}}

                    >
                        Reject
                    </Button>
                </div>
            </Row>


         </Row>
      <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">

      </Card.Footer>

    </Card.Body>
  </Card>
</TabPanel>
<TabPanel value={value} index={1}>
{Message !== null &&
        Message.map((message) => (
          <Card
            key={message.id}
            onClick={()=>handleNavigate(message)}
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
                  src={message.data.photoURL ? message.data.photoURL : ""}
                  roundedCircle
                  style={{ width: "100px", height: "100px", padding: "10px" }}
                />
              </Col>
              <Col md="7" style={{ alignContent: "center" }}>
                <Row>
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      {message.data.item_title}
                    </span>
                  </div>
                </Row>
                <Row>
                  <div>{message.data.place}</div>
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
                        height: "30px",
                        width: "30px",
                        alignContent: "center",
                      }}
                    >
                      {message.data.admin_badge}
                    </Badge>
                  </Col>
                </div>
              </Col>

            </Row>
          </Card>
        ))}
</TabPanel>

</Box>


    </div>

  )
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
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
function getChipColor(response) {
  switch (response) {
    case 'pending':
      return 'warning';  // yellow color for pending
    case 'active':
      return 'success';  // blue color for accepted
    case 'rejected':
      return 'danger';  // default color for other cases
  }
}
export default ProductrequestViewdetails;












