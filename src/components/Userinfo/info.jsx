/* eslint-disable prettier/prettier */


import React, { useState, useEffect } from "react";
import { app, db } from '../Config/Config.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup,InputGroup,Dropdown, Breadcrumb,Table, Spinner, Card, Pagination, Image,Toast,ToastContainer } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pathname from "../../routes.js";
import photo from '/public/assets/user_9797548.png';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  startAfter,
  endBefore,getDocs,
  limitToLast,where
} from "firebase/firestore";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons/faCircleDown";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Box } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import exportToExcel  from "../Dynamicform/Export";  
import Download from '../Dynamicform/Download.jsx';
import Downloadoption from '../Pdfoption/Pdfoption.jsx'
import { useUser } from "../UserContext/UserContext.js";

function Info() {
  
  const [authenticated, setAuthenticated] = useState(false);
  const [allDocs, setAllDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {permission} = useUser();


    const [lastVisible, setLastVisible] = useState(null);
    const [buttonCount,setbuttonCount] = useState(0);
    const [dataFlag,setdataFlag] = useState(false);
    const [loading, setloading] = useState(true);


  const [rowsPerPage] = useState(20); // Set number of rows per page
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleNavigate = (data) => {
   
    navigate('/infoview', { state: { id: data.id, data: data.data } });
  };
 
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, [auth]);


const today = new Date();
const todayDateString = today.toLocaleDateString();

// Function to format Firestore date to local date string
const formatFirestoreDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString();
};

// Function to check if a date is today
const isToday = (dateString) => {
    return dateString === todayDateString;
};
const fetchAnswers = async (q) => {
        const querySnapshot = await getDocs(q);
          if (querySnapshot.docs.length === 0) {
            setLastVisible(null);
            setloading(false);
            setdataFlag(true);
          } else {
            setloading(false);
            setdataFlag(false);
            setAllDocs([]);
            querySnapshot.forEach((doc) => {
                       const lastActiveDateString = formatFirestoreDate(doc.data().lastActive.seconds)
    const isActiveToday = isToday(lastActiveDateString)
              setAllDocs((prev) => {
                return [
                  ...prev,
                  {
                    id: doc.id,
                    data: doc.data(),
                    active:isActiveToday,
                  },
                ];
              });
            });
            setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
          }
  };
  useEffect(()=>{

          const first = query(
            collection(db, "users"),
            orderBy("createdAt", "desc"),
            limit(rowsPerPage)
          );
        fetchAnswers(first)

  },[]);
  const nextButton = ()=>{
        setbuttonCount(buttonCount + 1);
      const next = query(
        collection(db, "users"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(rowsPerPage)
      );
    fetchAnswers(next);
  }
    const previousButton = () => {
        setbuttonCount(buttonCount - 1);
      const next = query(
        collection(db, "users"),
        orderBy("createdAt", "desc"),
        endBefore(lastVisible),
        limitToLast(rowsPerPage)
      );
      fetchAnswers(next);
    };


//serach
 const handleSearch = (searchInput) => {

    const response = collection(db, "users");


    // Check if the searchInput is empty
    if (searchInput.trim() === '') {
      // If empty, refresh the page

  const first = query(
            collection(db, "users"),
            orderBy("createdAt", "desc"),
            limit(rowsPerPage)
          );
        fetchAnswers(first)
    }else{
       let queryType;
        if (validateEmail(searchInput)) {
            queryType = "email";
        } else if (!isNaN(searchInput)) {
            queryType = "mobile";
        } else {
            queryType = "name";
        }

        const q = query(
            response,
            orderBy("createdAt", "desc"),
            where(queryType, ">=", searchInput),where(queryType, "<=", searchInput + "\uf8ff"),
            limit(rowsPerPage)
        );

        fetchAnswers(q, queryType);
    }
   }

 const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

 const [sortBy, setSortBy] = useState({ key: '', order: 'asc' });
   const handleSort = (key) => {
        const sortOrder = sortBy.key === key && sortBy.order === 'asc' ? 'desc' : 'asc';
        setSortBy({ key, order: sortOrder });

        // Implement sorting logic based on the selected key and order
        // Example:
        const sortedData = [...allDocs].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });

        setAllDocs(sortedData);
    };
    const [show, setShow] = useState(false);
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const [number1, setNumber1] = useState(210);
    const [number2, setNumber2] = useState(297);
  
    const handleDownload = (orientation, num1, num2) => {
      
    Download(allDocs, permission,orientation,num1, num2)
     
  
    };
  
    const handleExport = () => {
  
  
      exportToExcel(allDocs,permission, 'newdata.xlsx')
  
  
    };
      const [selectedOrientation, setSelectedOrientation] = useState('portrait');
      const handleOrientationChangeparent = (orientation) => {
          setSelectedOrientation(orientation);
      };
  
  return (
    <>
      {loading ? (
        <Spinner animation="grow" size="lg" style={{ color: "primary", display: "inline-block", position: "relative", top: "50%", left: "50%" }} />
      ) : (
        <>

          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">
              {/* <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item>CRM</Breadcrumb.Item>
                <Breadcrumb.Item active>Users</Breadcrumb.Item>
              </Breadcrumb> */}
              <h4>Users Info</h4>
            </div>

          </div>
          <div className="table-settings mb-4">
            <Row >
              <Col xs={8}  lg={3} xl={4} >
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control
          type="text"
          placeholder="Search by Name/Email/Number"
          onChange={(e) => handleSearch(e.target.value)}
        />
                </InputGroup>
                </Col>
            </Row>
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
          
            
            <Card border="light" className="table-wrapper table-responsive shadow-sm">
              <Card.Body className="pt-0">
                <Table style={{height: '100px', overflow: 'auto'}} hover className="user-table align-items-center">
                  <thead>
                    <tr>
                        <th className="border-bottom" onClick={() => handleSort('#')}>#</th>
                               <th className="border-bottom" onClick={() => handleSort('Image')}>Image</th>
                    <th className="border-bottom" onClick={() => handleSort('Name')}>Name</th>
                    <th className="border-bottom" onClick={() => handleSort('Mobile')}>Mobile</th>
                    <th className="border-bottom" onClick={() => handleSort('Email')}>Email</th>
                    <th className="border-bottom" onClick={() => handleSort('CreatedAt')} style={{  whiteSpace: 'nowrap' }}>Created at</th>
                    <th className="border-bottom" onClick={() => handleSort('LastActiveTime')} style={{  whiteSpace: 'nowrap' }}>Last Active Time</th>
                    <th className="border-bottom" onClick={() => handleSort('State')}>State</th>
                    <th className="border-bottom" onClick={() => handleSort('Country')}>Country</th>
                    <th className="border-bottom" onClick={() => handleSort('Status')}>Status</th>
                    <th className="border-bottom"   >View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allDocs.map((doc, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Image src={doc.data.photoURL?doc.data.photoURL:photo} style={{width:'50px',height:'50px'}} roundedCircle></Image>
    {/* <img src={doc.data.photoURL?doc.data.photoURL:photo} alt="photo" style={{height:'50px',width:'50px'}}/> */}

</td>
                        <td>{doc.data.name}</td>
                        <td>{doc.data.mobile}</td>
                        <td>{doc.data.email}</td>
                        <td>{new Date(doc.data.createdAt.seconds * 1000).toLocaleDateString()}</td>
                        <td>{new Date(doc.data.lastActive.seconds * 1000).toLocaleDateString()}</td>
                        <td style={{textWrap:'nowrap'}}>{doc.data.city}</td>

                        <td>{doc.data.country}</td>
                          <td style={{  whiteSpace: 'nowrap' }}>{doc.active ? 'Active today' : 'Not active today'} </td>
                        <td>
                          <Button variant="success" onClick={()=>handleNavigate(doc)} style={{color:'white'}}>View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Pagination className="mb-2 mb-lg-0">
                     <Pagination.Prev
         disabled={buttonCount < 1 ? true : false}
                    onClick={previousButton}
      >
        Previous
      </Pagination.Prev>

      <Pagination.Next    disabled={!lastVisible}
                    onClick={nextButton}>
        Next
      </Pagination.Next>


                  </Pagination>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default Info
