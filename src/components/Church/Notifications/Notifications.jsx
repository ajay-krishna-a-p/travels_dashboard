
import React from 'react'
import { Card, InputGroup, Form, Button } from 'react-bootstrap'

export default function Notifications() {
    return (
        <div>

            <Card className='mb-2'><span style={{ padding: '10px' }}>Title</span></Card>
            <InputGroup className="mb-3">

                <Form.Control
                    type="text"
                    as="textarea"
                    style={{ minWidth: '200px' }}
                />
            </InputGroup>
            <Button>Submit</Button>

        </div>
    )
}