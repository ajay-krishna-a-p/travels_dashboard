/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import routes from '../../routes';
import { Col, Row, Form, Button, ButtonGroup, InputGroup, Dropdown, Breadcrumb, Table, Spinner, Card, Pagination } from 'react-bootstrap';
import { faHome, faSearch, faPlus, faTrashAlt,faBookmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {app,db} from '../Config/Config.js';
import { addDoc,collection, updateDoc,doc } from 'firebase/firestore';
import { useUser } from '../UserContext/UserContext.js';
import Loading from '../Loading/Loading.jsx';
import Alerts from '../Alerts/Alerts';
import { useLocation } from 'react-router-dom';
export default function Addpermissionmodel() {
  const {user,permission}=useUser();
  const location=useLocation();
  const [permissions, setPermissions] = useState([]);
  const [permissionname, setpermissionname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const[loading,setloading]=useState(false)



  useEffect(()=>{
    if(location.state.page==="edit"){
      setpermissionname(location.state.data.permission_name)
      setPermissions(location.state.data.permissions)
    }
  },[location])

  const handlePermissionChange = (name) => (event) => {
  const { checked } = event.target;

  if (checked) {
    // If the checkbox is checked, add the permission name to the permissions array
    setPermissions(prevPermissions => [ name]);
  } else {
    // If the checkbox is unchecked, remove the permission name from the permissions array
    setPermissions(prevPermissions => prevPermissions.filter(permission => permission !== name));
  }
};


const areAllPermissionsSelected = (routeName) => {
  return permissions.includes(`${routeName}read`) &&
    permissions.includes(`${routeName}add`) &&
    permissions.includes(`${routeName}update`) &&
    permissions.includes(`${routeName}delete`);
};

const handleSelectAllPermissions = (routeName, checked) => {
  const permissionsToUpdate = [
    `${routeName}read`,
    `${routeName}add`,
    `${routeName}update`,
    `${routeName}delete`
  ];
  const updatedPermissions = checked
    ? [...permissions, ...permissionsToUpdate]
    : permissions.filter(permission => !permissionsToUpdate.includes(permission));
  setPermissions(updatedPermissions);
};

const areAllaroundPermissionsSelected = () => {
  // Check if all permission checkboxes for all routes are included in the permissions state
  const allPermissions = routes.flatMap(route => [
    `${route.name}read`,
    `${route.name}add`,
    `${route.name}update`,
    `${route.name}delete`
  ]);
  return allPermissions.every(permission => permissions.includes(permission));
};

const handleSelectAllaroundPermissions = (checked) => {
  // Add or remove permissions for all permission types for all routes based on whether the checkbox is checked or unchecked
  const allPermissions = routes.flatMap(route => [
    `${route.name}read`,
    `${route.name}add`,
    `${route.name}update`,
    `${route.name}delete`
  ]);
  const updatedPermissions = checked
    ? [...permissions, ...allPermissions]
    : permissions.filter(permission => !allPermissions.includes(permission));
  setPermissions(updatedPermissions);
};


const handleCreate = async (e) => {
  e.preventDefault();
  setloading(true);


   if(location.state.page==="edit"){
 try {
  await updateDoc(doc(db, "admin_users","LIPUtt8BT1UAJfQBHp5AaBa7jVI2"), {
      permission_name: permissionname,
      permissions: permissions,
      createAt: new Date(),
      created_by: "",
      created_email: user.email,
      created_phn: "",
    }).then(()=>{
 setSuccessMessage("Permission model Updated successfully");
    setloading(false);
    })




  } catch (error) {
    console.error("Firestore operation failed:", error);
    setErrorMessage(error.message); // Assuming error.message contains the error message
    setloading(false);
    throw error;
  }
   }else{
 try {
    const docRef = await addDoc(collection(db, "permission_models"), {
      permission_name: permissionname,
      permissions: permissions,
      createAt: new Date(),
      created_by: "",
      created_email: user.email,
      created_phn: "",
      status:true,
    });

    await updateDoc(doc(db, "permission_models", docRef.id), {
      permission_id: docRef.id,
    });

    setSuccessMessage("Permission model created successfully");
    setloading(false);
  } catch (error) {
    console.error("Firestore operation failed:", error);
    setErrorMessage(error.message); // Assuming error.message contains the error message
    setloading(false);
    throw error;
  }
   }

};




  return (
    <div>
      {console.log(location.state.page)}
        {(errorMessage || successMessage ) && (
        <Alerts
          showDanger={!!errorMessage} // Convert error message to boolean
          showSuccess={!!successMessage}  //Convert success message to boolean
         // Convert warning message to boolean
          message={errorMessage || successMessage }
          booleanVariable={prev => !prev}

        />
      )}
      {loading ? (
        <Loading/>
      ) : (
        <>
      {console.log(permissions)}
      <Form onSubmit={handleCreate}>
        <Card>
            <div style={{padding:'20px'}}>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Permission Name</Form.Label>
                        <Form.Control

                            type="text"
                          value={permissionname}
                          onChange={(e)=>{setpermissionname(e.target.value)}}

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
                    <div>
<FormControlLabel
    control={
      <Checkbox
        checked={areAllaroundPermissionsSelected()}
        onChange={(e) => handleSelectAllaroundPermissions(e.target.checked)}
      />
    }
    label="Select All Permissions"
  />
</div>

{/* {routes.map((route, idx) => (
  <div key={idx}>
    <div style={{display:'flex',flexDirection:'row',}} className='mt-4'>
    <FontAwesomeIcon icon={faBookmark}  style={{ paddingRight: '10px' }} className='mt-2'/>
    <h4>{route.name}</h4>
    <Checkbox
        checked={areAllPermissionsSelected(route.name)}
        onChange={(e) => handleSelectAllPermissions(route.name, e.target.checked)}
      />
    </div>

    <FormControlLabel
      control={
      <Checkbox
  name={route.name + "read"}
  checked={permissions.includes(route.name + "read")}
  onChange={handlePermissionChange(route.name + "read")}
/>
      }
      label="Read"
    />
    <FormControlLabel
      control={
       <Checkbox
  name={route.name + "add"}
  checked={permissions.includes(route.name + "add")}
  onChange={handlePermissionChange(route.name + "add")}
/>
      }
      label="Add"
    />
    <FormControlLabel
      control={
         <Checkbox
  name={route.name + "update"}
  checked={permissions.includes(route.name + "update")}
  onChange={handlePermissionChange(route.name + "update")}
/>
      }
      label="Update"
    />
    <FormControlLabel
      control={
        <Checkbox
  name={route.name + "delete"}
  checked={permissions.includes(route.name + "delete")}
  onChange={handlePermissionChange(route.name + "delete")}
/>
      }
      label="Delete"
    />
  </div>
))} */}

    <Table striped bordered size="xl">
      <thead>
        <tr>
          <th>Page Name</th>
           <th>Select All</th>
          <th>Read</th>
          <th>Add</th>
          <th>Update</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {routes.map((route, idx) => (
          <tr key={idx}>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faBookmark} style={{ paddingRight: '8px' }} />
              <h5>{route.name}</h5>
            </td>
              <td>
              <Checkbox
                checked={areAllPermissionsSelected(route.name)}
                onChange={(e) => handleSelectAllPermissions(route.name, e.target.checked)}
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    name={route.name + "read"}
                    checked={permissions.includes(route.name + "read")}
                    onChange={handlePermissionChange(route.name + "read")}
                  />
                }
                label=""
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    name={route.name + "add"}
                    checked={permissions.includes(route.name + "add")}
                    onChange={handlePermissionChange(route.name + "add")}
                  />
                }
                label=""
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    name={route.name + "update"}
                    checked={permissions.includes(route.name + "update")}
                    onChange={handlePermissionChange(route.name + "update")}
                  />
                }
                label=""
              />
            </td>
            <td>
              <FormControlLabel
                control={
                  <Checkbox
                    name={route.name + "delete"}
                    checked={permissions.includes(route.name + "delete")}
                    onChange={handlePermissionChange(route.name + "delete")}
                  />
                }
                label=""
              />
            </td>

          </tr>
        ))}
      </tbody>
    </Table>

            </div>
            <Button type="submit">Submit</Button>
          </Card>
          </Form>
          </>
)}

    </div>
  );
}
