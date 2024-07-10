
import React, { useState, useEffect, useRef } from 'react';
import { Form, Row, Col, Button, Accordion, InputGroup, Card } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { app, db } from '../Config/Config.js'
import { getFunctions, httpsCallable } from "firebase/functions";
import { setDoc,doc, collection, query, getDocs, where } from 'firebase/firestore';
import Loading from '../Loading/Loading.jsx';
import Alerts from '../Alerts/Alerts.jsx';
import Reporthistory from '../Reporthistory/Reporthistory.jsx';


export default function CreateUser(data) {
    const { auth, userdata,permissions } = data; 

      const [loading, setloading] = useState(false);






      const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
    const [passworderror, setpassworderror] = useState('');
        const [confirmpassworderror, setconfirmpassworderror] = useState('');
        const[typevalue,settypevalue]=useState([])
        const[type,settype]=useState([])
        const [permissionerror, setpermissionerror] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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
        name:'',
        password:'',
        confirmpassword:'',
        email:'',
        phone:'',
        status: false,
    });
      
 const validateFields = () => {
     setEmailError('');
      setPhoneError('');
      setpassworderror('');
      setpermissionerror('')
      setconfirmpassworderror('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(ItemData.email);
    console.log(validEmail)

    if (!validEmail) {
      setEmailError('Please enter a valid email address');
    } else if (ItemData.phone.length !== 10) {
      setPhoneError('Phone number must be exactly ten digits');
      return false; // Return false as phone number is invalid

     } else if(ItemData.password.length!==8) {
    setpassworderror('Password must be 8 characters long');

  }
     else if(ItemData.password!==ItemData.confirmpassword) {

     setconfirmpassworderror('Passwords doesnt matching');
 
 
      }
  
   else {
      setEmailError('');
      setPhoneError('');
      setpassworderror('');
      setpermissionerror('')
      setconfirmpassworderror('')
      return true; // Return true if both email and phone are valid
    }
  };
   
    
   

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        // Check the type of the input value
        const updatedValue = type === 'checkbox' ? e.target.checked : value;

        if (name === 'confirmpassword' && value !== ItemData.password) {
      setconfirmpassworderror('Passwords do not match');
    } else {
      setconfirmpassworderror('perfect');
    }

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
console.log(ItemData)
if (validateFields()) {
    setloading(true);

    const addNewUserAdmin = httpsCallable(functions, "newadminsignup");
    addNewUserAdmin({
      name: ItemData.name,
      number: ItemData.phone,
      password: ItemData.password,
      email: ItemData.email,
    


     
    
     // Pass the mergedData here
    })
      .then((result) => {
        const data = result.data;
        console.log(data);
     
        if (data != null) {
              Reporthistory(userdata,"success").then((result)=>{
         setSuccessMessage('Successfully created Admin'); 
             
             });
                 setloading(false);
          // Handle the response from the Cloud Function
            
      
        }else{
           
           Reporthistory(userdata,"error").then((result)=>{
           setErrorMessage('Error in creating admin'); 
             });
           setloading(false);
        }
      })
    
  } 
};

  // end of function

  //uploading user data
  const uploadUserData = (uid) => {
    setDoc(doc(db, "admin-users", uid), {
    name: ItemData.name,
      number: ItemData.phone,
      password: ItemData.password,
      email: ItemData.email,
      status:ItemData.status,
      uid: uid,
    

    }).then(() => {
      setloading(false);
    //    AdminLog("New Admin User Created as " +name +e_mail ,user_email).then((result)=>{
 
    //   showSuccess();
    //    });
    //   clearAll();
    });
  };


  return (
    <div >
    
        {(errorMessage || successMessage) && (
        <Alerts
          showDanger={!!errorMessage} // Convert error message to boolean
          showSuccess={!!successMessage} // Convert success message to boolean
          message={errorMessage || successMessage}
        booleanVariable={prev => !prev}
        
        />
        )}
     
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Add New User</Accordion.Header>
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
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                           name='name'
                            type="text"
                            placeholder="Enter name"
                            value={ItemData.name}
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
                      <Form.Group as={Col} md="6" controlId="validationCustom02">
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
                      <Form.Group as={Col} md="6" controlId="validationCustom02">
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
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           name='password'
                            type="password"
                            placeholder="Enter password"
                            value={ItemData.password}
                            onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
                             {passworderror && <div style={{ color: 'red' }}>{passworderror}</div>}       </Form.Group>
            
</Row>
                        
                  
                
                <Row className='mt-4'>

<Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                           name='confirmpassword'
                            type="password"
                            placeholder="Confirm password"
                            value={ItemData.confirmpassword}
                            onChange={handleInputChange}
                            required
                            style={{
                                resize:'none',
                                display:'flex',
                                verticalAlign: 'bottom',
                                width:'96%'
                            }}
                        />
          {confirmpassworderror && (
  <div style={{ color: confirmpassworderror === "perfect" ? 'green' : 'red' }}>
    {confirmpassworderror}
  </div>
)}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Permission</Form.Label>
                                    <Form.Select
                                        name="value"
                                        aria-label="Default select example"
                                        Value={typevalue.permissions}
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
                  

</Row>
<Col className='mt-4'> <Form.Group as={Col} md="4" controlId="validationCustom04" className=''>
                    <Form.Label>Status</Form.Label>
                    <div className='ml-4'>
                        <ToggleButton
                            id={`radio-1`}
                            type="checkbox"
                            variant='outline-success'
                            name="status"
                            checked={ItemData.status}
                            onChange={handleInputChange}
                            style={{ marginRight: '10px' }}
                        >
                            Active
                        </ToggleButton>

                        <ToggleButton
                            id={`radio-2`}
                            type="checkbox"
                            variant='outline-danger'
                            name="status"
                            checked={!ItemData.status} // Invert the value for 'Inactive'
                            onChange={handleInputChange}
                        >
                            Inactive
                        </ToggleButton>
                    </div>




                </Form.Group></Col>


               
                
                
                <Button type="submit" className='mt-4'>Submit</Button>
            </Form>
        </div></Card>)}
 


</div>
  )
}