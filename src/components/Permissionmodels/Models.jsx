
/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Col, Row, Form, Button, ButtonGroup, InputGroup, Dropdown, Breadcrumb, Table, Spinner, Card, Pagination } from 'react-bootstrap';
import { useUser } from '../UserContext/UserContext';
import {
  collection,
  onSnapshot,
  doc,
  query,
  orderBy,
  limit,
  startAfter,
  endBefore,getDocs,
  limitToLast,where,
  deleteDoc
} from "firebase/firestore";
import { app, db } from '../Config/Config.js'
import Alerts from '../Alerts/Alerts.jsx';
export default function Models() {
      const navigate = useNavigate();
  const{user,permissions}=useUser();
  const [authenticated, setAuthenticated] = useState(false);
  const [allDocs, setAllDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [lastVisible, setLastVisible] = useState(null);
    const [buttonCount,setbuttonCount] = useState(0);
    const [dataFlag,setdataFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const[loading,setloading]=useState(false)


  const [rowsPerPage] = useState(20);

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
            collection(db, "permission_models"),
            orderBy("createAt", "desc"),
            limit(rowsPerPage)
          );
        fetchAnswers(first)

  },[]);
  const nextButton = ()=>{
        setbuttonCount(buttonCount + 1);
      const next = query(
        collection(db, "permission_models"),
        orderBy("createAt", "desc"),
        startAfter(lastVisible),
        limit(rowsPerPage)
      );
    fetchAnswers(next);
  }
    const previousButton = () => {
        setbuttonCount(buttonCount - 1);
      const next = query(
        collection(db, "permission_models"),
        orderBy("createAt", "desc"),
        endBefore(lastVisible),
        limitToLast(rowsPerPage)
      );
      fetchAnswers(next);
    };



  const handleNavigate = (value, data) => {

    if (value === "add") {
      navigate('/addpermissionmodel', { state: { page: "add" } });
    } else if (value === "edit") {
      navigate('/addpermissionmodel', { state: { page: "edit", id: data.id, data: data.data } });
    } else if (value === "view") {
      navigate('/addpermissionmodel', { state: { page: "view", id: data.id, data: data.data } });
    } else if (value === "delete") {
     deleteDoc(doc(db, "permission_models", data.id))
  .then(() => {
    setSuccessMessage("Permission model deleted successfully");
  })
  .catch((error) => {
    console.error("Error deleting document: ", error);
    setErrorMessage("Failed to delete permission model");
  });
    }

};

  const handleSwitchChange = (id) => {
    // Implement your logic to handle the switch toggle change here
    console.log(`Switch toggle for item with ID ${id} changed`);
  };
  return (
    <div>
         {(errorMessage || successMessage ) && (
        <Alerts
          showDanger={!!errorMessage} // Convert error message to boolean
          showSuccess={!!successMessage}  //Convert success message to boolean
         // Convert warning message to boolean
          message={errorMessage || successMessage }
          booleanVariable={prev => !prev}

        />
      )}
        <Button className='mb-3' onClick={(e)=>handleNavigate("add")}>Add Permission Models</Button>
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
            <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom" >#</th>
                  <th className="border-bottom" >Created Date</th>
                     <th className="border-bottom" >Created Email</th>

                  <th className="border-bottom" >Permission Name</th>

                   <th className="border-bottom" >Status</th>
                  <th className="border-bottom" >Action</th>

                </tr>
              </thead>
              <tbody>

              {allDocs.map((doc, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                    <td>{new Date(doc.data.createAt.seconds * 1000).toLocaleDateString()}</td>
                       <td>{doc.data.created_email}</td>
                        <td>{doc.data.permission_name}</td>


 <td>
  <Form.Check
    type="switch"
    id={`switch-${index}`}
    label=""
    onChange={() => handleSwitchChange(doc.id)} // Handle the switch change event
    style={{ Color: doc.active ? '#28a745' : '#dc3545' }} // Apply inline style based on the active state
  />
</td>
                         <td><Button variant="success"onClick={(e)=>handleNavigate("edit",doc)}>Edit</Button></td>
                            <td><Button variant="danger" onClick={(e)=>handleNavigate("delete",doc)}>Delete</Button></td>
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
  )
}
