
/* eslint-disable prettier/prettier */

import React, { useState, useEffect, useRef } from 'react';
import { Form, Row, Col, Button, Accordion, InputGroup, Card } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { app, db } from '../Config/Config.js'
import { getFunctions, httpsCallable } from "firebase/functions";

import { setDoc,doc, updateDoc, query, collection, getDocs, where } from 'firebase/firestore';

import Loading from '../Loading/Loading.jsx';
import Alerts from '../Alerts/Alerts.jsx';
import Reporthistory from '../Reporthistory/Reporthistory.jsx';
import { useUser } from '../UserContext/UserContext.js';
import { useLocation } from 'react-router-dom';


export default function EditUser() {
    const { permission } = useUser();
    const location=useLocation();
    const [loading, setloading] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const[typevalue,settypevalue]=useState([])
    const[type,settype]=useState([])

    useEffect(()=>{
        fetchrenewabletype()
          },[])
          const fetchrenewabletype = async ()=>{
            const q = query(collection(db, 'permission_models'),where("status","==",true));
             const querySnapshot = await getDocs(q);
             const models = [];
           querySnapshot.forEach((doc) => {
               // Extract necessary data from each document
               models.push(doc.data());
             });
             settype(models);
       }
       const handleinputchange = (e) => {
        const { name, value, type } = e.target;
          const parsedValue = JSON.parse(value); // Parse the stringified JSON back to its original form
    settypevalue(parsedValue);
    
    };

 const [ItemData, setItemData] = useState({
        office_name:'',
        email:'',
        phone:'',
        permission:'',
        status: false,
    });
  useEffect(()=>{
   if(location.state.page==="edit" ){
    setItemData( { office_name:location.state.data.office_name,
        email:location.state.data.email,
        phone:location.state.data.phone?location.state.data.phone:"",
        permission:location.state.data.permission,
        status: location.state.data.status,})

   }
  },[location])
 const validateFields = () => {
     setEmailError('');
      setPhoneError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(ItemData.email);


    if (!validEmail) {
      setEmailError('Please enter a valid email address');
    } else if (ItemData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly ten digits');
      return false; // Return false as phone number is invalid

     }


   else {
      setEmailError('');
      setPhoneError('');


      return true; // Return true if both email and phone are valid
    }
  };




    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        // Check the type of the input value
        const updatedValue = type === 'checkbox' ? e.target.checked : value;



        // For status field, set to false if unchecked
        if (name === 'status') {
            setItemData((prevData) => ({
                ...prevData,
                [name]: updatedValue,
            }));
        } else {
            // For other fields, use the updated value
            setItemData((prevData) => ({
                ...prevData,
                [name]: updatedValue,
            }));
        }
    };

      const functions = getFunctions(app, "asia-south1");
  // function call
 const handleCreateNewUser = (e) => {
    e.preventDefault();

if (validateFields()) {
    setloading(true);

    if(location.state.page==="edit"){

if (location.state.data.email !== ItemData.email) {
    const changeEmailVendor = httpsCallable(functions, "changeEmail");
    changeEmailVendor({
        uid: location.state.id,
        email: ItemData.email,
    }).then(async(result) => {
        const data = result.data;
        if (data != null) {
            await updateDoc(doc(db, "admin_users", location.state.id), {
              name: ItemData.office_name,
      phone: "+91"+ItemData.phone,
      email: ItemData.email,
      status:ItemData.status,
      permission:ItemData.permission,
            }).then(() => {
                Reporthistory(permission,"success").then((result)=>{
        alert("Changes Updated Successfully")
  setloading(false);
             });
            })
        }
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
} else {
    updateDoc(doc(db, "admin_users", location.state.id), {
      office_name: ItemData.office_name,
      phone: "+91"+ItemData.phone,
      status:ItemData.status,
      permission:ItemData.permission,
    }).then(() => {
        Reporthistory(permission,"success").then((result)=>{
        alert("Changes Updated Successfully")
  setloading(false);
             });

    }).catch((error) => {
         Reporthistory(permission,"error").then((result)=>{
        alert("Error updating document")
          setloading(false);

             });

    });
}
}
  }
};





  return (
    <div >



    <Accordion>
        <Accordion.Item >
            <Accordion.Header>Edit User</Accordion.Header>
            <Accordion.Body>
                To facilitate the addition of new user, users can seamlessly accomplish this task by selecting
                the appropriate role from a dropdown menu and subsequently filling in the corresponding fields with
                relevant information.
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>

    {loading?(<Loading/>):(   <Card className='mt-4'>
        <div className='mt-4' style={{ padding:'20px' }}>
            <Form onSubmit={handleCreateNewUser} >
                <Row className="mb-3">

                    <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                           name='office_name'
                            type="text"
                            placeholder="Enter name"
                            value={ItemData.office_name}
                            onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                           name='email'
                            type="text"
                            placeholder="Enter email"
                            value={ItemData.email}
                            onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />

                           {emailError && <div style={{ color: 'red' }}>{emailError}</div>}


                    </Form.Group>
                      <Form.Group as={Col} md="6" controlId="validationCustom02" className='mt-3'>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                           name='phone'
                            type="text"
                            placeholder="Enter Mobile"
                            value={ItemData.phone}
                            onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                        {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Permission</Form.Label>
                                    <Form.Select
                                        name="value"
                                        aria-label="Default select example"

                                        Value={typevalue}

                                         onChange={handleinputchange}
                                        required
                                        style={{
                                            resize: 'none',
                                            display: 'flex',
                                            verticalAlign: 'bottom',
                                            width: '96%',
                                            borderWidth:'2px',
                                        }}
                                    >
                                        <option value="">Select Permission</option>
                                      {type.map((model) => (
          <option key={model.permission_name
          } value={JSON.stringify(model)}>
            { model.permission_name}
          </option>
 ))}
                                    </Form.Select>
                                </Form.Group>
          










<Form.Group as={Col} md="4" controlId="validationCustom04" className='mt-3'>
                    <Form.Label>Status</Form.Label>
                    <div className='ml-4'>
                        <ToggleButton
                            id={`radio-1`}
                            type="checkbox"
                            variant={ItemData.status?'success':'danger'}
                            name="status"
                            checked={ItemData.status}
                            onChange={handleInputChange}

                            style={{ marginRight: '10px',color:'white' }}
                        >
                          { ItemData.status?" Active":"InActive"}
                        </ToggleButton>

                    </div>




                </Form.Group>
                </Row>





                <Button type="submit" className='mt-4'>Submit</Button>
            </Form>
        </div></Card>)}



</div>
  )
}
