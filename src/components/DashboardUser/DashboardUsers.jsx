/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { app, db } from '../Config/Config.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlus, faCircle, faCircleDown, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup,InputGroup,Dropdown, Breadcrumb,Table, Spinner, Card, Pagination } from 'react-bootstrap';
import { getFunctions,httpsCallable } from 'firebase/functions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  Pathname  from "../../routes.js";
import Reporthistory from "../Reporthistory/Reporthistory.jsx";
import { useUser } from "../UserContext/UserContext.js";
import exportToExcel  from "../Dynamicform/Export";  
import Download from '../Dynamicform/Download.jsx';
import Downloadoption from '../Pdfoption/Pdfoption.jsx'

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

function Info() {
  const {permission} = useUser();
  const [authenticated, setAuthenticated] = useState(false);
  const [allDocs, setAllDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

    const [lastVisible, setLastVisible] = useState(null);
    const [buttonCount,setbuttonCount] = useState(0);
    const [dataFlag,setdataFlag] = useState(false);
    const [loading, setloading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rowsPerPage] = useState(20); // Set number of rows per page
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleNavigate = (value, data) => {
    if(value === "add"){
      navigate('/adduser', { state: { page:"add" } });
    }else if (value === 'edit'){
      navigate('/edituser',{state:{page:"edit",id: data.id,data:data.data}});
    }else if (value == "permission") {
     navigate('/permissions',{state:{page:"permission",id:data.id,data:data.data}});
    }else if (value === "delete"){
      handledeletefunction(data.id)
    }

  };
  const functions = getFunctions(app,'asia-south1');
  const handledeletefunction=(id)=>{
    const deleteuser = httpsCallable(functions, 'deleteUser');
    deleteuser({ uid: id})
      .then((result) => {
         const data = result.data;


         if(data){
             Reporthistory(permission,"success").then((result)=>{
           alert("Adminuser deleted successfully");
               });

         }else
         {
          alert("");
     Reporthistory(permission,"success").then((result)=>{
           alert("Error deleting admin");
               });

         }

      })
  }

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
            onSnapshot(q, (querySnapshot) => {
              querySnapshot.docChanges().forEach((change) => {
                const docData = change.doc.data();
                const docId = change.doc.id;

                if (change.type === 'added') {
                  // Handle added document
                  setAllDocs((prev) => [
                    ...prev,
                    {
                      id: docId,
                      data: docData,
                    },
                  ]);
                }

                if (change.type === 'modified') {
                  // Handle modified document
                  setAllDocs((prev) =>
                    prev.map((doc) =>
                      doc.id === docId ? { id: docId, data: docData } : doc
                    )
                  );
                }

                if (change.type === 'removed') {
                  // Handle removed document
                  setAllDocs((prev) =>
                    prev.filter((doc) => doc.id !== docId)
                  );
                }
              });
            });
            setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
          }
  };
  useEffect(()=>{

          const first = query(
            collection(db, "admin_users"),
            orderBy("createdAt", "desc"),
            limit(rowsPerPage)
          );
        fetchAnswers(first)

  },[]);
  const nextButton = ()=>{
        setbuttonCount(buttonCount + 1);
      const next = query(
        collection(db, "admin_users"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(rowsPerPage)
      );
    fetchAnswers(next);
  }
    const previousButton = () => {
        setbuttonCount(buttonCount - 1);
      const next = query(
        collection(db, "admin_users"),
        orderBy("createdAt", "desc"),
        endBefore(lastVisible),
        limitToLast(rowsPerPage)
      );
      fetchAnswers(next);
    };


//serach
 const handleSearch = (searchInput) => {

    const response = collection(db, "admin_users");


    // Check if the searchInput is empty
    if (searchInput.trim() === '') {
      // If empty, refresh the page

  const first = query(
            collection(db, "admin_users"),
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

    const changePassword=()=>{
      setloading(true);
        if (password) {
          if (password===confirmPassword) {
            handlefunction();
          }else{
              alert("Error");
          }

        }else
        {
         alert("Error");
        }
      }

     const handleCloseModal = () => {
        setShowModal(false);
      };
      const[iddata,setiddata]=useState('')
       const handleshowmodal = (id) => {
        setiddata(id)
        setShowModal(true);
      };
    const handlefunction=()=>{
      const changePassword = httpsCallable(functions, 'changePassword');
      changePassword({ id: iddata,password})
        .then((result) => {
           const data = result.data;
           setloading(false);
           if(data){

              Reporthistory(permission,"success").then((result)=>{
        alert("Password Reset successfull");
                 });

             setShowModal(false);
           }else
           {
            Reporthistory(permission,"error").then((result)=>{
        alert("Password reset Error");
                 });
            setShowModal(false);

           }

        })
    }
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
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Password Reset</h5>

            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={changePassword}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      <div className={`modal-backdrop ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div >
              {/* <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item>CRM</Breadcrumb.Item>
                <Breadcrumb.Item active>Users</Breadcrumb.Item>
              </Breadcrumb> */}
              <h5>Dashboard Users</h5>
            </div>
            {/* <div className='mb-4'>

            <Dropdown className="btn-toolbar">
      <Dropdown.Toggle as={Button} variant="secondary" size="xs" onClick={() => handleNavigate("add")} className="me-2">
        <FontAwesomeIcon icon={faPlus} className="me-2" />Add New
      </Dropdown.Toggle>
    </Dropdown>

      </div> */}

                <Col style={{textAlign:'right',}} ><Button onClick={() => handleNavigate('add')}>
                  <FontAwesomeIcon icon={faPlus} className="me-2" />Add User</Button></Col>

          </div>
          <div className="table-settings mb-4">
            <Row className="justify-content-between align-items-center">
              <Col xs={8} md={6} lg={3} xl={4}>
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

                    <th className="border-bottom" onClick={() => handleSort('Name')}>Name</th>
                    <th className="border-bottom" onClick={() => handleSort('Mobile')}>Mobile</th>
                    <th className="border-bottom" onClick={() => handleSort('Email')}>Email</th>
                    <th className="border-bottom" onClick={() => handleSort('CreatedAt')} style={{  whiteSpace: 'nowrap' }}>Created at</th>
                    <th className="border-bottom" onClick={() => handleSort('LastActiveTime')} style={{  whiteSpace: 'nowrap' }}>Last Active Time</th>
                    <th className="border-bottom" onClick={() => handleSort('State')} style={{  whiteSpace: 'nowrap' }}>Permission Name</th>
                    <th className="border-bottom" onClick={() => handleSort('Status')}>Status</th>
                    {/* <th className="border-bottom"   >View</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {allDocs.map((doc, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>


                        <td style={{  whiteSpace: 'nowrap' }}>{doc.data.name}</td>
                        <td style={{  whiteSpace: 'nowrap' }}>{doc.data.number}</td>
                        <td style={{  whiteSpace: 'nowrap' }}>{doc.data.email}</td>
                        <td style={{  whiteSpace: 'nowrap' }}>{new Date(doc.data.createdAt.seconds * 1000).toLocaleDateString()}</td>
                        <td style={{  whiteSpace: 'nowrap' }}>{new Date(doc.data.lastlogin.seconds * 1000).toLocaleDateString()}</td>

                        <td style={{  whiteSpace: 'nowrap' }}>{doc.data.permission_name}</td>


                          <td style={{  whiteSpace: 'nowrap' }}>{doc.active ? 'Active today' : 'Not active today'}</td>
                        {/* <td>
                          <Button variant="success" onClick={() => handleNavigate( "edit",doc.id,doc.data)}>View</Button>
                        </td> */}
                        <td>
                        <Button variant="info" style={{color:'white'}} onClick={(e)=>handleNavigate('edit',doc)}>Edit</Button>
                        </td>
                        <td>
                        <Button variant="primary" onClick={(e)=>handleNavigate('permission',doc)}>Permissions</Button>
                        </td>
                        <td>
                        <Button variant="warning" style={{  whiteSpace: 'nowrap',color:'white' }} onClick={()=>handleshowmodal(doc.id)}>Change Password</Button>

                        </td>
                        <td>
                        <Button variant="danger" style={{  whiteSpace: 'nowrap' ,color:'white'}} onClick={()=> handleNavigate("delete",doc)}>Delete user</Button>

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
