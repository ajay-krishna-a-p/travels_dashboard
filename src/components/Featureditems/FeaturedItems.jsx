
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button, ButtonGroup, InputGroup, Dropdown, Breadcrumb, Table, Spinner, Card, Pagination, Badge } from 'react-bootstrap';
import { collection, doc, onSnapshot, orderBy, query, where,limit,startAfter,endBefore,getDocs } from 'firebase/firestore';
import { db } from '../Config/Config';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons/faFileExport';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons/faCircleDown';
import exportToExcel from '../Dynamicform/Export';
import Download from '../Dynamicform/Download.jsx';
import { useUser } from '../UserContext/UserContext';
import Loading from '../Loading/Loading.jsx';
import Downloadoption from '../Pdfoption/Pdfoption.jsx'

function FeaturedItems() {
   const {permission} = useUser();
    const [value, setValue] = useState(0);
  const [loading,setloading]=useState(false);
  const [lastVisiblerejected, setLastVisiblerejected] = useState(null);
    const [lastVisibleapproved, setLastVisibleactive] = useState(null);
      const [lastVisiblepending, setLastVisiblepending] = useState(null);
   const [dataFlag,setdataFlag] = useState(false);
     const [allrejected, setallrejected] = useState([]);
      const [allpending, setAllpending] = useState([]);
       const [allactive, setallactive] = useState([]);
       const[pendingcount,setpendingcount]=useState(0)
const[activecount,setactivecount]=useState(0)
const[rejectedcount,setrejectedcount]=useState(0)
         const [rowsPerPage] = useState(20);
     const [date1,setdate1]=useState(new Date())
            const [date2,setdate2]=useState(new Date())
    const [buttonCount,setbuttonCount] = useState(0);
       const handleDateChange1 = date => {
        setdate1(date);
    };
    const handleDateChange2 = date => {
        setdate2(date);
    };


      useEffect(() => {
  const executeQueries = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    await handleQuery("pending");
    await handleCount("pending");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay between queries
    await handleQuery("active");
    await handleCount("active");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay between queries
    await handleQuery("rejected");
    await handleCount("rejected");
  };

  executeQueries();
}, []);
  const handleQuery=(value)=>{

 const q = query(
      collection(db, `products`),
      orderBy("createdAt", "desc"),
      where("response", "==", value),
        where("fetaured", "==", true),
      limit(rowsPerPage));
    fetchproducts(q,value);



  }
const handleCount = (value) => {

    const q = query(
      collection(db, `products`),
      orderBy("createdAt", "desc"),
      where("response", "==", value),
        where("fetaured", "==", true),

    );
    fetchcount(q, value);

}
//modal
const [loadingmodal, setloadingmodal] = useState(false);
const [showModal, setShowModal] = useState(false);
const handleCloseModal = () => {
  setShowModal({ show: false,});
};
const handleshowmodal = (value) => {

setShowModal({ show: true, data: value,});
};
const [ItemData,setItemData]=useState({
  customername:'',


})

   const handleinputchange = (e) => {
      const { name, value, type } = e.target;

      setItemData((prevData) => ({
              ...prevData,
              [name]: value,
          }));






  };
const fetchcount = async (query, value) => {
  // Attach a snapshot listener to the query
  const unsubscribe = onSnapshot(query, (querySnapshot) => {
    const size = querySnapshot.size;
    if (value === "rejected") {
    setrejectedcount(size);
  } else if (value === "active") {
    setactivecount(size);
  } else if (value === "pending") {
    setpendingcount(size);
  }
  });

  // Return the unsubscribe function to detach the listener when needed
  return unsubscribe;
}

  const fetchproducts = async (q,value) => {
        const querySnapshot = await getDocs(q);


        if(value==="rejected"){
              if (querySnapshot.docs.length === 0) {
            setLastVisiblerejected(null);
            setloading(false);
            setdataFlag(true);
          } else {
            setloading(false);
            setdataFlag(false);
            setallrejected([]);

            onSnapshot(q, (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {

    const docData = change.doc.data();
    const docId = change.doc.id;

    if (change.type === 'added') {
      // Handle added document
      setallrejected((prev) => [
        ...prev,
        {
          id: docId,
          data: docData,
        },
      ]);
    }

    if (change.type === 'modified') {
      // Handle modified document
      setallrejected((prev) =>
        prev.map((doc) =>
          doc.id === docId ? { id: docId, data: docData } : doc
        )
      );
    }

    if (change.type === 'removed') {
      // Handle removed document
      setallrejected((prev) =>
        prev.filter((doc) => doc.id !== docId)
      );
    }
  });
});
            setLastVisiblerejected(querySnapshot.docs[querySnapshot.docs.length - 1]);
          }

        }else if(value==="active"){
              if (querySnapshot.docs.length === 0) {
            setLastVisibleactive(null);
            setloading(false);
            setdataFlag(true);
          } else {
            setloading(false);
            setdataFlag(false);
            setallactive([]);

            onSnapshot(q, (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {

    const docData = change.doc.data();
    const docId = change.doc.id;

    if (change.type === 'added') {
      // Handle added document
      setallactive((prev) => [
        ...prev,
        {
          id: docId,
          data: docData,
        },
      ]);
    }

    if (change.type === 'modified') {
      // Handle modified document
      setallactive((prev) =>
        prev.map((doc) =>
          doc.id === docId ? { id: docId, data: docData } : doc
        )
      );
    }

    if (change.type === 'removed') {
      // Handle removed document
      setallactive((prev) =>
        prev.filter((doc) => doc.id !== docId)
      );
    }
  });
});
            setLastVisibleactive(querySnapshot.docs[querySnapshot.docs.length - 1]);
          }

        }else if(value==="pending"){
    if (querySnapshot.docs.length === 0) {
            setLastVisiblepending(null);
            setloading(false);
            setdataFlag(true);
          } else {
            setloading(false);
            setdataFlag(false);
            setAllpending([]);

            onSnapshot(q, (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {

    const docData = change.doc.data();
    const docId = change.doc.id;

    if (change.type === 'added') {
      // Handle added document
      setAllpending((prev) => [
        ...prev,
        {
          id: docId,
          data: docData,
        },
      ]);
    }

    if (change.type === 'modified') {
      // Handle modified document
      setAllpending((prev) =>
        prev.map((doc) =>
          doc.id === docId ? { id: docId, data: docData } : doc
        )
      );
    }

    if (change.type === 'removed') {
      // Handle removed document
      setAllpending((prev) =>
        prev.filter((doc) => doc.id !== docId)
      );
    }
  });
});
            setLastVisiblepending(querySnapshot.docs[querySnapshot.docs.length - 1]);
          }
        }

  };
const nextButton = (status)=>{

    if(status==="rejected"){
  setbuttonCount(buttonCount + 1);

      const next = query(
    collection(db,`products`),orderBy("createdAt","desc"),where("response","==","rejected"),  where("fetaured", "==", true),
        startAfter(lastVisiblerejected),
        limit(rowsPerPage)
      );
    fetchproducts(next,"rejected");
    }else if(status==="active"){
        setbuttonCount(buttonCount + 1);
      const next = query(
        collection(db,`products`),orderBy("createdAt","desc"),where("response","==","active"),  where("fetaured", "==", true),
        startAfter(lastVisibleapproved),
        limit(rowsPerPage)
      );
    fetchproducts(next,"active");

    }else if(status==="pending"){
        setbuttonCount(buttonCount + 1);
      const next = query(
     collection(db,`products`),orderBy("createdAt","desc"),where("response","==","pending"),  where("fetaured", "==", true),
        startAfter(lastVisiblepending),
        limit(rowsPerPage)
      );
    fetchproducts(next,"pending");

    }


  }
    const previousButton = (status) => {

         if(status==="rejected"){
             setbuttonCount(buttonCount - 1);
      const next = query(
   collection(db,`products`),orderBy("createdAt","desc"),where("response","==","rejected"),  where("fetaured", "==", true),
        endBefore(lastVisiblerejected),
        limitToLast(rowsPerPage)
      );
     fetchproducts(next,"rejected");
             }else if(status==="active"){
                 setbuttonCount(buttonCount - 1);
      const next = query(
          collection(db,`products`),orderBy("createdAt","desc"),where("response","==","active"),  where("fetaured", "==", true),
        endBefore(lastVisibleapproved),
        limitToLast(rowsPerPage)
      );
          fetchproducts(next,"active");
                 }else if(status==="pending"){
                     setbuttonCount(buttonCount - 1);
      const next = query(
          collection(db,`products`),orderBy("createdAt","desc"),where("response","==","pending"),  where("fetaured", "==", true),

        endBefore(lastVisiblepending),
        limitToLast(rowsPerPage)
      );
  fetchproducts(next,"pending");
                 }


    };
const[alldocs,setalldocs]=useState([])
    const handleDatesearch=async()=>{
      setalldocs([])
        date1.setHours(0);
      date1.setMinutes(0);
      date1.setSeconds(0);
      date1.setMilliseconds(0);
      date2.setHours(23);
      date2.setMinutes(59);
      date2.setSeconds(59);
      date2.setMilliseconds(999);

        const q = query(
          collection(db,`products`),
          orderBy("createdAt","desc"),
         where("createdAt", ">=", date1),
      where("createdAt", "<=", date2),
        where("fetaured", "==", true),
      );

    onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setalldocs(docs);
    });


    }


    //local storage
     useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setValue(Number(savedName));
     // Optionally set the name state if needed
    }
  }, []);
      useEffect(() => {
   localStorage.setItem('name', value);
  }, [value]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const handlenavigate = (data) => {

      navigate('/productrequestviewDetails',{ state:{id: data.id, data: data.data } });

    };

const handlenavigateEdit = () => {
  navigate('/editproductrequest');
}
const [number1, setNumber1] = useState(210);
  const [number2, setNumber2] = useState(297);

  const handleDownload = (val,orientation, num1, num2) => {
    if(val==="pending"){
  Download(allpending, permission,orientation,num1, num2)
    }else if(val==="all"){
  Download(alldocs, permission,orientation,num1, num2)
    }else if(val==="rejected"){
  Download(allrejected, permission,orientation,num1, num2)
    }else if(val==="active"){
  Download(allactive, permission,orientation,num1, num2)
    }else if(val==="deleted"){

    }

  };

  const handleExport = (val) => {

 if(val==="pending"){
    exportToExcel(allpending,permission, 'newdata.xlsx')

    }else if(val==="all"){

    exportToExcel(alldocs,permission, 'alldata.xlsx')
    }else if(val==="rejected"){

    exportToExcel(allrejected,permission, 'rejecteddata.xlsx')
    }else if(val==="active"){

    exportToExcel(allactive,permission, 'activedata.xlsx')
    }else if(val==="deleted"){

    }

  };
    const [selectedOrientation, setSelectedOrientation] = useState('portrait');
    const handleOrientationChangeparent = (orientation) => {
        setSelectedOrientation(orientation);
    };


  return (
    <div>
      <div className={`modal ${showModal.show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal.show ? 'block' : 'none' }}>
        <form >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Item</h5>

            </div>
            {loadingmodal?(
<Loading/>
):(
            <div className="modal-body">


 <div className="form-group">
                <label className='mb-2'>Enter Reason</label>
                <input name='customername' type="text" className="form-control" required value={ItemData.customername} onChange={handleinputchange } />

              </div>



            </div>
               )}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              <button type="submit" className="btn btn-primary" >Delete</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}
      indicatorColor="primary" // Set the color of the indicator (the line beneath the active tab) to primary (blue)
      textColor="primary">
        <Tab label={<Row><Col>
          New</Col>
        <Col><Badge style={{height:'100%',width:'100%',alignContent:'center'}}bg="warning" >{pendingcount}</Badge></Col></Row>}
        style={{ color: value === 0 ? '#0d6efd' : 'grey' }}/>
        <Tab label={<Row><Col>
          Accepted</Col>
        <Col><Badge style={{height:'100%',width:'100%',alignContent:'center'}}bg="success" >{activecount}</Badge></Col></Row>}
        style={{ color: value === 1 ? '#0d6efd' : 'grey' }}/>
        <Tab label={<Row><Col>
          Rejected</Col>
        <Col><Badge style={{height:'100%',width:'100%',alignContent:'center'}}bg="danger" >{rejectedcount}</Badge></Col></Row>}
        style={{ color: value === 2 ? '#0d6efd' : 'grey' }}/>
        <Tab label={<Row><Col>
          All</Col>
        <Col><Badge style={{height:'100%',width:'100%',alignContent:'center'}}bg="primary" >{alldocs.length}</Badge></Col></Row>}
        style={{ color: value === 3 ? '#0d6efd' : 'grey' }}/>

      </Tabs>
      <TabPanel value={value} index={0}>
      <Downloadoption
        handleDownload={()=>handleDownload("pending",selectedOrientation,number1,number2)}
        handleExport={()=>handleExport("pending")}
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
            <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
              <thead>
                <tr>

                  <th className="border-bottom" >#</th>
                  <th className="border-bottom" >Created Date</th>
                  <th className="border-bottom" >Item Name</th>
                  <th className="border-bottom" >Item ID</th>
                  <th className="border-bottom" >Item Title</th>
                  <th className="border-bottom" >Action</th>
                </tr>
              </thead>
              {allpending!=null && allpending.map((product,index)=>(
                <>
              <tbody>

              <tr key={index}>
                <td>{index+1}</td>
              <td>{product.data.createdAt?new Date(product.data.createdAt.seconds*1000).toLocaleDateString():'N/A'}</td>
                <td>{product.data.item_name}</td>
                <td>{product.data.item_id}</td>
                <td>{product.data.item_title}</td>

                <td><Button variant="info" onClick={()=>handlenavigate(product)} style={{color:'white'}}>View</Button></td>
                <td><Button variant="danger" onClick={()=>handleshowmodal()} style={{color:'white'}}>Delete</Button></td>



              </tr>

          </tbody>
          </>
              ))}

            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Pagination className="mb-2 mb-lg-0">
                     <Pagination.Prev
         disabled={buttonCount < 1 ? true : false}
                    onClick={()=>previousButton("pending")}
      >
        Previous
      </Pagination.Prev>

      <Pagination.Next    disabled={!lastVisiblepending}
                    onClick={()=>nextButton("pending")}>
        Next
      </Pagination.Next>


                  </Pagination>
            </Card.Footer>
          </Card.Body>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Downloadoption
        handleDownload={()=>handleDownload("active",selectedOrientation,number1,number2)}
        handleExport={()=>handleExport("pending")}
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
            <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom" >#</th>
                      <th className="border-bottom" >Created Date</th>
                  <th className="border-bottom" >Item Name</th>
                  <th className="border-bottom" >Item ID</th>
                  <th className="border-bottom" >Item Title</th>

                  <th className="border-bottom" >Action</th>


                </tr>
              </thead>
              {allactive!=null && allactive.map((product,index)=>(
                <>
              <tbody>

              <tr key={index}>
                <td>{index+1}</td>
                       <td>{product.data.createdAt?new Date(product.data.createdAt.seconds*1000).toLocaleDateString():'N/A'}</td>

                <td>{product.data.item_name}</td>
                <td>{product.data.item_id}</td>
                <td>{product.data.item_title}</td>

                <td><Button variant="info" onClick={()=>handlenavigate(product)} style={{color:'white'}}>View</Button></td>

                <td><Button variant="danger" onClick={()=>handleshowmodal()} style={{color:'white'}}>Delete</Button></td>







              </tr>

          </tbody>
          </>
              ))}

            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Pagination className="mb-2 mb-lg-0">
                     <Pagination.Prev
         disabled={buttonCount < 1 ? true : false}
                    onClick={()=>previousButton("active")}
      >
        Previous
      </Pagination.Prev>

      <Pagination.Next    disabled={!setLastVisibleactive}
                    onClick={()=>nextButton("active")}>
        Next
      </Pagination.Next>


                  </Pagination>
            </Card.Footer>
          </Card.Body>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Downloadoption
        handleDownload={()=>handleDownload("rejected",selectedOrientation,number1,number2)}
        handleExport={()=>handleExport("pending")}
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
             <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom" >#</th>
                        <th className="border-bottom" >Created Date</th>
                  <th className="border-bottom" >Item Name</th>
                  <th className="border-bottom" >Item ID</th>
                  <th className="border-bottom" >Item Title</th>
                  <th className="border-bottom" >Action</th>
                </tr>
              </thead>
              {allrejected!=null && allrejected.map((product,index)=>(
                <>
              <tbody>

              <tr key={index}>
                <td>{index+1}</td>
     <td>{product.data.createdAt?new Date(product.data.createdAt.seconds*1000).toLocaleDateString():'N/A'}</td>
                <td>{product.data.item_name}</td>
                <td>{product.data.item_id}</td>
                <td>{product.data.item_title}</td>

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
                    onClick={()=>previousButton("rejected")}
      >
        Previous
      </Pagination.Prev>

      <Pagination.Next    disabled={!lastVisiblerejected}
                    onClick={()=>nextButton("rejected")}>
        Next
      </Pagination.Next>


                  </Pagination>
            </Card.Footer>
          </Card.Body>
        </Card>
      </TabPanel>
        <TabPanel value={value} index={3}>
             <Col style={{display:'flex'}} >
    <DatePicker
           type="date"
            selected={date1}

            onChange={handleDateChange1}
            dateFormat="dd/MM/yyyy"
            className="form-control"
             placeholderText='From'


        />
         &nbsp;


    <DatePicker
        selected={date2}
        onChange={handleDateChange2}
        dateFormat="dd/MM/yyyy"

        className="form-control"
         type="date"
         placeholderText='To'
    />
  &nbsp;


<Col ><Button variant="success" onClick={handleDatesearch} style={{color:'white'}}>Sort</Button></Col>
        </Col>
        <div className='mt-2'>
        <Downloadoption
        handleDownload={()=>handleDownload("all",selectedOrientation,number1,number2)}
        handleExport={()=>handleExport("all")}
        selectedOrientation={selectedOrientation}
        setSelectedOrientation={handleOrientationChangeparent}
        handleOrientationChange={handleOrientationChangeparent}
        number1={number1}
        number2={number2}
        setNumber1={setNumber1}
        setNumber2={setNumber2}
        
      />
        </div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
             <Table style={{ height: '100px', overflow: 'auto' }} hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom" >#</th>
                         <th className="border-bottom" >Created Date</th>
                  <th className="border-bottom" >Item Name</th>
                  <th className="border-bottom" >Item ID</th>
                  <th className="border-bottom" >Item Title</th>

                  <th className="border-bottom" >Activity Status</th>
                  <th className="border-bottom" >Action</th>


                </tr>
              </thead>
              {alldocs!=null && alldocs.map((product,index)=>(
                <>
              <tbody>

              <tr key={index}>
                <td>{index+1}</td>
              <td>{product.data.createdAt?new Date(product.data.createdAt.seconds*1000).toLocaleDateString():'N/A'}</td>
                <td>{product.data.item_name}</td>
                <td>{product.data.item_id}</td>
                <td>{product.data.item_title}</td>

                   <td><Chip
                  label={product.data.response || 'N/A'}
                  color={getChipColor(product.data.response)}
                  variant="outlined"
                /></td>
                <td><Button variant="info" onClick={()=>handlenavigate(product)} style={{color:'white'}}>View</Button></td>
                <td><Button variant="dark"  style={{color:'white'}} onClick={()=>handlenavigateEdit()}>Edit</Button></td>
                <td><Button variant="danger" onClick={()=>handleshowmodal()}  style={{color:'white'}}>Delete</Button></td>
              </tr>

          </tbody>
          </>
              ))}

            </Table>

          </Card.Body>
        </Card>
      </TabPanel>
    </Box>
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

export default FeaturedItems;
