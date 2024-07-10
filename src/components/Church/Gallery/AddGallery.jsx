import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

export default function AddGallery() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);

    const handleFileChange = (event) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            const fileArray = files.map(file => URL.createObjectURL(file));
            setSelectedImages(prevImages => [...prevImages, ...files]);
            setPreviewUrls(prevUrls => [...prevUrls, ...fileArray]);

            files.forEach(file => URL.revokeObjectURL(file));
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        const updatedPreviewUrls = previewUrls.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);
        setPreviewUrls(updatedPreviewUrls);
    };

    const renderPhotos = (source) => {
        return source.map((photo, index) => {
            return (
                <div key={index} style={{ position: 'relative', display: 'inline-block', margin: '5px' }}>
                    <img src={photo} alt="selected" style={{ width: '150px', height: '100px' }} />
                    <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => handleRemoveImage(index)} 
                        style={{ position: 'absolute', top: '5px', right: '5px',borderRadius:'50%' }}
                    >
                       <FontAwesomeIcon icon={faClose} size='1x'/>
                    </Button>
                </div>
            );
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedImages.length === 0) {
            alert('Please select images to upload.');
            return;
        }

        const formData = new FormData();
        selectedImages.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });

        try {
            const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('Images uploaded successfully:', data);
            // Handle success, e.g., reset form or display a message
        } catch (error) {
            console.error('Error uploading images:', error);
            // Handle error
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="validationCustom02" className='mt-2'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name='name'
                            type="text"
                            placeholder="Enter title"
                            required
                            style={{
                                resize: 'none',
                                display: 'flex',
                                verticalAlign: 'bottom',
                            }}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <span className='mt-4'>Description</span>
                    <InputGroup className="mb-3 mt-2">
                        <Form.Control
                            type="text"
                            as="textarea"
                            placeholder='Enter description'
                        />
                    </InputGroup>
                </Row>

                <Row className="mt-3">
                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Upload Images</Form.Label>
                        <Form.Control type="file" multiple onChange={handleFileChange} />
                    </Form.Group>
                </Row>
                
                <div style={{ minHeight: '100%', maxHeight: 'auto', width: '100%', marginTop: '1rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'left' }}>
                    {renderPhotos(previewUrls)}
                    
                </div>

                <Button variant="primary" type="submit" className="mt-3">
                    Submit
                </Button>
            </Form>
        </div>
    );
}