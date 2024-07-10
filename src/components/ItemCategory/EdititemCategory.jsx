
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import React, { useState, useRef, useEffect } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { app, db } from '../Config/Config';
import { Form, Row, Col, Button, Accordion, InputGroup, Card, Breadcrumb, Spinner,Dropdown } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import { faHome, faSearch, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import Alerts from '../Alerts/Alerts.jsx';
// Component to render different types of form fields
const FormField = ({ field, onChange }) => {
  const { field_name, field_title, type, options, placeholder, rows, required } = field;


  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleDeleteOption = (index) => {
    onChange('deleteOption', index);
  };

  const handleEditOption = (index, value) => {
    onChange(`option-${index}`, value);
  };

  return (
    <div>
      {type === 'text' && (

        <Form.Group as={Col} md="6">
          <Form.Label>Field Name</Form.Label>
          <Form.Control
            name="placeholder"
            aria-label="Default select example"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={placeholder || ''}
            required
            style={{
              resize: 'none',
              display: 'flex',
              verticalAlign: 'bottom',
              width: '96%'
            }}
          >
          </Form.Control>
        </Form.Group>
      )}
      {type === 'textarea' && (
        <Form.Group as={Col} md="6">
          <Form.Label>Field Name</Form.Label>
          <Form.Control
            name="rows"
            aria-label="Default select example"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={rows || ''}
            required
            style={{
              resize: 'none',
              display: 'flex',
              verticalAlign: 'bottom',
              width: '96%'
            }}
          >
          </Form.Control>
        </Form.Group>
      )}
      {type === 'dropdown' && (
        <div >
          {options.map((option, index) => (
            <div key={index}>
              <div style={{ display: 'flex', flexDirection: "row" }} className='mt-3'>
                <Form.Group as={Col} md="4">
                  <Form.Control
                    aria-label="Default select example"
                    onChange={(e) => handleEditOption(index, e.target.value)}
                    value={option.label}
                    required
                    style={{
                      resize: 'none',
                      display: 'flex',
                      verticalAlign: 'bottom',
                      width: '96%'
                    }}
                  >
                  </Form.Control>
                </Form.Group>
                <Button onClick={() => handleDeleteOption(index)} style={{ backgroundColor: 'white' }}>
                  <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'black' }} />
                </Button>
              </div>
            </div>
          ))}
          <Button onClick={() => onChange('addDropdownOption', '')} className='mt-3'>Add Option</Button>
        </div>
      )}
      {type === 'radio_button' && (
        <div>
          {options.map((option, index) => (
            <div key={index}>
              <div style={{ display: "flex", flexDirection: "row" }} className='mt-3' >
                <Form.Group as={Col} md='4'>
                  <Form.Control
                    aria-label="Default select example"
                    onChange={(e) => handleEditOption(index, e.target.value)}
                    value={option.label}
                    required
                    style={{
                      resize: 'none',
                      display: 'flex',
                      verticalAlign: 'bottom',
                      width: '96%'
                    }}
                  >
                  </Form.Control>
                </Form.Group>
                <Button onClick={() => handleDeleteOption(index)} style={{ backgroundColor: 'white' }} >
                  <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'black' }} /></Button>
              </div>
            </div>
          ))}
          <Button onClick={() => onChange('addOption', '')} className='mt-3'>Add Option</Button>
        </div>
      )}

    </div>
  );
};

// Component for dynamic form generation
const DynamicForm = ({ field, onFieldChange, onAddField, onClick }) => {

  const [name, setName] = useState(''); // State for name input
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleChange = (name, value) => {
    onFieldChange(name, value);
  };

  const handleAddField = () => {
    onAddField();
  };


  const fileInputRef = useRef(null);



  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input when the button is clicked
  };
  const location = useLocation();
  const [CategoryName,setItemCategoryName] = useState();
  const [FieldTitle,setFieldTitle] = useState();
  const [FieldName,setFieldName] = useState();
  const [FieldType, setFieldType] = useState('');
  const [Edit,setEdit] = useState([]);

  useEffect(()=>{

    // setdata()
    console.log(location.state.data)
},[])
const setdata =()=>{
  setItemCategoryName(location.state.data.name)


}
const submit =async(e)=>{
  e.preventDefault();

  const data = {
    name:name,

  }
  try{
   const docRef = updateDoc(doc(db,"item_category",location.state.id),data).then(()=>{
      alert('submited');

    })

  }
  catch(error){
    console.error("Error adding document: ", error);
  }

}

  return (
    <>
      <div>
        <Card>
          <div style={{ padding: '20px' }}>
            <Form onSubmit={submit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control

                    aria-label="Default select example"
                    type="text"
                    name="name"
                    value={CategoryName}
                    onChange={(e) => setItemCategoryName(e.target.value)}
                    placeholder="Enter name"
                    required
                    style={{
                      resize: 'none',
                      display: 'flex',
                      verticalAlign: 'bottom',
                      width: '96%'
                    }}
                  >
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row style={{ paddingRight: '22px' }}>
                <div className='mb-4'>
                  <Col >
                    <Card
                      style={{

                        display: 'flex',
                      }}>
                      <Row style={{justifyContent:'space-between', alignItems: 'center'}}>
                        <Col style={{ padding: '30px', fontWeight: 'bold' }}>Choose image</Col>
                        <Col  style={{ padding: '30px',textAlign: 'right' }}><Button onClick={handleButtonClick} style={{ backgroundColor: "green", borderColor: 'ButtonShadow', }} >Upload Image</Button></Col>
                        <Row>
                          <Col>
                            <Col style={{ padding: '20px' }}> <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              name="image"
                              onChange={handleFileChange}
                              required
                              style={{ display: 'none' }}
                            />
                              {file && (
                                <div>
                                  <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                                  <p>Filename: {file.name}</p>
                                </div>
                              )}</Col>
                          </Col>
                        </Row>
                      </Row>
                    </Card></Col>
                </div>
              </Row>
{/*
             <div className='mb-4 '>
             <Dropdown className="btn-toolbar">
      <Dropdown.Toggle as={Button} variant="secondary" size="xs" onClick={() => handleAddField()} className="me-2">
        <FontAwesomeIcon icon={faPlus} className="me-2" />Add Field
      </Dropdown.Toggle>
    </Dropdown>

             </div> */}



                <Col className="text-right " md='12' style={{textAlign:'right', paddingRight: '22px'}}><Button onClick={handleAddField} >
                  <FontAwesomeIcon icon={faPlus} className="me-2" />Add Field</Button></Col>

              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Field Title:</Form.Label>
                  <Form.Control
                    name="field_title"
                    aria-label="Default select example"
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    value={field.field_title || ''}
                    required
                    style={{
                      resize: 'none',
                      display: 'flex',
                      verticalAlign: 'bottom',
                      width: '96%'
                    }}
                  >
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Field Name:</Form.Label>
                  <Form.Control
                    name="field_name"
                    aria-label="Default select example"
                    value={field.field_name || ''}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    required
                    style={{
                      resize: 'none',
                      display: 'flex',
                      verticalAlign: 'bottom',
                      width: '96%'
                    }}
                  >
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Col>
                  <Form.Group as={Col} md="9" controlId="validationCustom01">
                    <Form.Label>Field Type:</Form.Label>
                    <Form.Select
                      name="type"
                      aria-label="Default select example"
                      value={field.type || ''}
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                      required
                      style={{
                        resize: 'none',
                        display: 'flex',
                        verticalAlign: 'bottom',
                        width: '96%'
                      }}
                    >
                      <option value="">Select Type</option>
                      <option value="text">Text</option>
                      <option value="textarea">Textarea</option>
                      <option value="dropdown">Dropdown</option>
                      <option value="radio_button">Radio Button</option>
                      <option value="date">Date</option>
                      <option value="number">number</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <div className='mt-4'>
                    <div style={{ display: 'flex', flexDirection: 'row', }}>
                      <label style={{ paddingRight: '10px' }}>Required:</label>
                      <input
                        type="checkbox"
                        name="required"
                        checked={field.required || false}
                        onChange={(e) => handleChange(e.target.name, e.target.checked)}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              {field.type !== 'text' && field.type !== 'textarea' && (
                <FormField field={field} onChange={handleChange} />
              )}
              <div className='mt-4'>
                <Row style={{ paddingRight: '22px' }}>
                  <Col className='' style={{textAlign:'right'}}><Button onClick={() => onClick({ name: name, image: file })} type='submit'><span style={{ paddingLeft: '20px', paddingRight: '20px' }}>Submit</span> </Button></Col>
                </Row>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </>
  );
};

// Main App component
const EdititemCategory = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [warningMessage, setwarningMessage] = useState('');
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({
    field_title: '',
    field_name: '',
    type: '',
    options: [],
    required: false
  });
//   useEffect(()=>{

//     // setdata()
//     console.log(location.state.data)
// },[])
// const setdata =()=>{

//   console.log(location.state.data)

// }
  const handleFieldChange = (name, value) => {
    console.log(value)
    console.log(value)
    if (name === 'addOption') {

      const newOptions = [...newField.options, value || ''];
      setNewField({
        ...newField,
        options: newOptions
      });
    } else if (name === 'addDropdownOption') {
      const newDropdownOptions = [...newField.options, value || ''];
      setNewField({
        ...newField,
        options: newDropdownOptions
      });
    } else if (name.startsWith('option-')) {
      // If the name starts with 'option-', it means an existing option is being edited
      const optionIndex = parseInt(name.split('-')[1]); // Extract the index of the option being edited
      const updatedOptions = [...newField.options]; // Create a copy of the options array
      if (updatedOptions[optionIndex] !== undefined) { // Check if the option at the specified index exists
        updatedOptions[optionIndex] = value || ''; // Update the value of the option at the specified index
        setNewField({ // Update the state with the updated options array
          ...newField,
          options: updatedOptions
        });
      }
    } else if (name === 'deleteOption') {
      const index = parseInt(value);
      const updatedOptions = [...newField.options];
      if (index >= 0 && index < updatedOptions.length) {
        updatedOptions.splice(index, 1);
        setNewField({
          ...newField,
          options: updatedOptions
        });
      }
    } else {
      setNewField({
        ...newField,
        [name]: value
      });
    }
  };


  const validateFields = (fields) => {
    if (fields.options.some(option => option === "")) {
      setwarningMessage("There is an empty option added. Please remove it or add corresponding value.");
      return false;
    } else if ((fields.type === "radio_button" || fields.type === "dropdown") && fields.options.length === 0) {
      setwarningMessage("Please add options for the selected field type.");
      return false;
    } else if (fields.field_name === "") {
      setwarningMessage("Enter Field Name.");
      return false;
    } else if (fields.field_title === "") {
      setwarningMessage("Enter Field Title.");
      return false;
    } else if (fields.type === "") {
      setwarningMessage("Select Type of UI.");
      return false;
    }
    return true;
  };



  const handleAddField = () => {
    if (validateFields(newField)) {
      setFields([...fields, newField]);
      setNewField({
        field_title: '',
        field_name: '',
        type: '',
        options: [],
        required: false
      });
    }
  };

  const storage = getStorage()

  const uploadImageAndGetURL = async (imageFile) => {

    if (imageFile === null) {
      setwarningMessage("Choose an image");
      return null;
    } else {
      try {
        // 1. Upload image file to Firebase Storage
        const storageRef = ref(storage, `images/${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);

        // 2. Retrieve download URL for the uploaded image
        const imageUrl = await getDownloadURL(storageRef);
        return imageUrl;
      } catch (error) {
        setloading(false)

        setwarningMessage("An error occurred while uploading the image. Please try again later.");
        return null;
      }
    }
  };

  const handleSubmit = async (values) => {
    setloading(true)
    const { name, image } = values


    // Upload image and get URL
    const imageUrl = await uploadImageAndGetURL(image);


    // Check if image upload was successful and form data is valid
    if (imageUrl && validateForm(name, imageUrl, fields)) {
      try {

        const collectionRef = collection(db, "item_category");
        const collectionSnapshot = await getDocs(collectionRef);
        const order = collectionSnapshot.size + 1; // Set order as the number of documents + 1

        // Construct data object for Firestore

        const data = { icon_img: imageUrl, item_id: "item_" + order, name: name, order: (order + 100).toString(), status: true, field_properties: fields }
        await addDoc(collectionRef, data).then(() => {
          // Alert user and perform other actions after successful submission
          setSuccessMessage("Form submitted successfully!");
          setloading(false)
        })


      } catch (error) {
        setloading(false)
        setErrorMessage("An error occurred while submitting the form. Please try again later.");
      }
    } else {
      setloading(false)
    }
  };

  // Function to validate form fields
  const validateForm = (name, imageUrl, fields) => {
    if (!name) {
      setwarningMessage("Enter a name");
      return false;
    } else if (!imageUrl) {
      setwarningMessage("Choose an image");
      return false;
    } else if (fields.length === 0) {
      setwarningMessage("Add some fields for the form");
      return false;
    }
    // Add more validation logic as needed

    return true; // Return true if form is valid
  };
  const handleDelete = (indexToDelete) => {
    // Create a copy of the fields array
    const updatedFields = [...fields];
    // Remove the item at the specified index
    updatedFields.splice(indexToDelete, 1);
    // Update the state with the new array
    setFields(updatedFields);
  };
  const [loading, setloading] = useState(false);


  return (
    <>
      {(errorMessage || successMessage || warningMessage) && (
        <Alerts
          showDanger={!!errorMessage} // Convert error message to boolean
          showSuccess={!!successMessage}  //Convert success message to boolean
          showWarning={!!warningMessage}// Convert warning message to boolean
          message={errorMessage || successMessage || warningMessage}
          booleanVariable={prev => !prev}

        />
      )}
      {loading ? (
        <Spinner animation="grow" size="lg" style={{ color: "primary", display: "inline-block", position: "relative", top: "50%", left: "50%" }} />
      ) : (
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">

              <h4>Edit Item Category</h4>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <DynamicForm
              field={newField}
              onFieldChange={handleFieldChange}
              onAddField={handleAddField}
              onClick={handleSubmit}

            />
            {fields.map((field, index) => (
              <div key={index}>
                <Card className='mt-3'>
                  <div style={{ padding: '20px' }}>
                    <h4>Field Title:{field.field_title}</h4>
                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'start', fontWeight: 'bold' }}>
                      <div>Field Name: {field.field_name}</div>
                      <div>Type: {field.type}</div>
                      <div>Required: {field.required ? 'Yes' : 'No'}</div>
                      {field.type === 'dropdown' && (
                        <ul style={{ fontWeight: 'bold' }}>
                          {field.options.map((option, idx) => (
                            <li key={idx} style={{ fontWeight: 'bold' }}>{option}</li>
                          ))}
                        </ul>
                      )}
                      {field.type === 'radio_button' && (
                        <ul style={{ fontWeight: 'bold' }}>
                          {field.options.map((option, idx) => (
                            <li key={idx} style={{ fontWeight: 'bold' }}>{option}</li>
                          ))}
                        </ul>
                      )}
                      <Button onClick={() => handleDelete(index)} style={{ backgroundColor: 'white' }}>
                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'black' }} /></Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

          </div>
        </>
      )}
    </>

  );
};

export default EdititemCategory;
