/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Table, Image } from 'react-bootstrap';
import { Nav, Card, ProgressBar, Pagination } from 'react-bootstrap';

import './Button.css';
import Pathname from "../../routes.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch, faAngleDown, faAngleUp, faArrowDown, faArrowUp, faPlus, faEdit, faEllipsisH, faTags, faExternalLinkAlt, faEye, faTrashAlt, faPen, faCircleDown, faFileExport } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { addDoc, collection, doc, setDoc, updateDoc, onSnapshot, deleteDoc, query, orderBy, where } from "firebase/firestore";
import { app, db } from '../Config/Config.js';

import { Tab, Tabs, Box,Tooltip } from '@mui/material';

import exportToExcel  from "../Dynamicform/Export";  
import Download from '../Dynamicform/Download.jsx';
import Downloadoption from '../Pdfoption/Pdfoption.jsx'
import { useUser } from "../UserContext/UserContext.js";
import photo from '/public/assets/user_9797548.png';
export default function ItemCategory() {
     const {permission} = useUser();

  const [ItemCategory,setItemCategory] = useState([]);
  const navigate = useNavigate();
  const [buttonCount,setbuttonCount] = useState(0);
  const [lastVisible, setLastVisible] = useState(null);
  const handleNavigate = () => {
    navigate('/addItemcategory');
  };
  const editNavigate = (doc) => {
    navigate('/editItemcategory',{state:{id:doc.id,data:doc.data}});
  };
  const [ItemData, setItemData] = useState({

    status: false,
  });


  useEffect(()=>{
    handleQuery();

  },[])
  const handleQuery=()=>{
    const q = query(collection(db,"item_category"),orderBy("status"),where("status","==",true));
    setItemCategory(null);
    fetchData(q);
    }

  const fetchData=async(q)=>{
    setItemCategory(null);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
      }));
      setItemCategory(newData);

  });
  }
  const [number1, setNumber1] = useState(210);
  const [number2, setNumber2] = useState(297);

  const handleDownload = (orientation, num1, num2) => {
    
  Download(ItemCategory, permission,orientation,num1, num2)
   

  };

  const handleExport = () => {


    exportToExcel(ItemCategory,permission, 'newdata.xlsx')


  };
    const [selectedOrientation, setSelectedOrientation] = useState('portrait');
    const handleOrientationChangeparent = (orientation) => {
        setSelectedOrientation(orientation);
    };
    const nextButton = ()=>{
      setbuttonCount(buttonCount + 1);
    const next = query(
      collection(db, "item_category"),
      orderBy("order"),
      startAfter(lastVisible),
      limit(rowsPerPage)
    );
  fetchAnswers(next);
}
  const previousButton = () => {
      setbuttonCount(buttonCount - 1);
    const next = query(
      collection(db, "item_category"),
      orderBy("order"),
      endBefore(lastVisible),
      limitToLast(rowsPerPage)
    );
    fetchAnswers(next);
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          {/* <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item>CRM</Breadcrumb.Item>
                <Breadcrumb.Item active>Featured</Breadcrumb.Item>
              </Breadcrumb> */}
          <h4>Item Category</h4>
        </div>
      </div>
      {/* <div className='mb-4'>
      <Col xs={4} md={2} xl={1} >
            <Dropdown className="btn-toolbar">
      <Dropdown.Toggle as={Button} variant="secondary" size="xs" onClick={() => handleNavigate("add")} className="me-2">
        <FontAwesomeIcon icon={faPlus} className="me-2" />Add New
      </Dropdown.Toggle>
    </Dropdown>
        </Col>
      </div> */}


      <div>


        <Col className="mb-3 " md="12">
          <Button onClick={handleNavigate}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Add Category
          </Button>
        </Col>
        <Downloadoption
        handleDownload={()=>handleDownload(selectedOrientation,number1,number2)}
        handleExport={()=>handleExport()}
        selectedOrientation={selectedOrientation}
        setSelectedOrientation={handleOrientationChangeparent}
        handleOrientationChange={handleOrientationChangeparent}
        number1={number1}
        number2={number2}
        setNumber1={setNumber1}
        setNumber2={setNumber2}
      />
          
        <div>
         <div>
         <Card border="light" className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
             <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom" >#</th>
                        <th className="border-bottom" >Image</th>
                  <th className="border-bottom" >Item Name</th>
                  <th className="border-bottom" >Item ID</th>
                  
                  <th className="border-bottom" >Action</th>
                </tr>
              </thead>
              {ItemCategory!=null && ItemCategory.map((product,index)=>(
                <>
              <tbody>

              <tr key={index}>
                <td>{index+1}</td>
     <td>    <Image src={product.data.icon_img?product.data.icon_img:photo} style={{width:'50px',height:'50px'}} roundedCircle></Image></td>
                <td>{product.data.name}</td>
                <td>{product.data.item_id}</td>
               

                <td><Button variant="info" onClick={()=>handlenavigate(product)} style={{color:'white'}}>View</Button></td>

                <td><Button variant="danger" onClick={()=>handleshowmodal()}  style={{color:'white'}}>Delete</Button></td>



              </tr>

          </tbody>
          </>
              ))}

            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Pagination className="mb-2 mb-lg-0">
                     <Pagination.Prev
         disabled={buttonCount < 1 ? true : false}
                    onClick={()=>previousButton()}
      >
        Previous
      </Pagination.Prev>

      <Pagination.Next    disabled={!lastVisible}
                    onClick={()=>nextButton()}>
        Next
      </Pagination.Next>


                  </Pagination>
            </Card.Footer>
          </Card.Body>
        </Card>
         </div>
        </div>
      </div>
      
    </div>
  )
}
