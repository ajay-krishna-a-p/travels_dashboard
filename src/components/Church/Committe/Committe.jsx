
import { faDeleteLeft, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sheet, Table } from '@mui/joy'
import { IconButton, Tooltip } from '@mui/material';

import React from 'react'
import { Button, Card, CardBody, Pagination, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Committe() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/addcommitte");
  }
  return (
    <div>
      <Button className='mb-2' onClick={() => handleNavigate()}>Add Committe</Button>
      <Card>
        <CardBody>
          <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
            <Table
              stripe="odd"
              hoverRow
              sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
            >

              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Name</th>
                  <th>Mobile</th>
                  <th>Position</th>

                  <th>Edit</th>
                  <th>Delete</th>

                </tr>
              </thead>
              <tbody>

                <tr >
                  <td>Biju thankappan</td>
                  <td>9876543343</td>
                  <td>Auditor</td>

                  <td>
                    <Button style={{ borderRadius: '50%' }}><FontAwesomeIcon icon={faPencil} style={{ fontSize: '12px' }} /></Button>

                  </td>
                  <td> <Tooltip title="Delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </Tooltip></td>
                </tr>
                <tr >
                  <td>Biju thankappan</td>
                  <td>9876543343</td>
                  <td>Auditor</td>

                  <td>
                    <Button style={{ borderRadius: '50%' }}><FontAwesomeIcon icon={faPencil} style={{ fontSize: '12px' }} /></Button>

                  </td>
                  <td> <Tooltip title="Delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </Tooltip></td>
                </tr>
                <tr >
                  <td>Biju thankappan</td>
                  <td>9876543343</td>
                  <td>Auditor</td>

                  <td>
                    <Button style={{ borderRadius: '50%' }}><FontAwesomeIcon icon={faPencil} style={{ fontSize: '12px' }} /></Button>

                  </td>
                  <td> <Tooltip title="Delete">
                    <FontAwesomeIcon icon={faTrash} />
                  </Tooltip></td>
                </tr>

              </tbody>
            </Table>
          </Sheet>
        </CardBody>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev

              >
                Previous
              </Pagination.Prev>

              <Pagination.Next


              >

              </Pagination.Next>

              <Pagination.Next

              >
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
        </Card.Footer>
      </Card>

    </div>
  )
}
