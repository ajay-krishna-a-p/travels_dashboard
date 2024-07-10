
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { faAdd, faDeleteLeft, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sheet, Table } from '@mui/joy'
import { IconButton, Tooltip } from '@mui/material';


import { Button, Card, CardBody,Pagination,Nav } from 'react-bootstrap';


export default function BloodDonation() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Blood Doners" value="1" />
            <Tab label="Add Doners" value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1">
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
                                    <th>Blood Group</th>
                                
                                    <th>Edit</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>Biju thankappan</td>
                                    <td>9876543343</td>
                                    <td>AB-</td>
                                 
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
                                    <td>AB-</td>
                                 
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
                                    <td>AB-</td>
                                 
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
        </TabPanel>
        <TabPanel value="2">
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
                                    <th>Blood Group</th>
                                
                                    <th>Add</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>Biju thankappan</td>
                                    <td>9876543343</td>
                                    <td>AB-</td>
                                 
                                    <td>
                                    <Button ><FontAwesomeIcon icon={faAdd}   /></Button>

                                    </td>
                                    <td> <Tooltip title="Delete">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Tooltip></td>
                                </tr>
                                <tr >
                                    <td>Biju thankappan</td>
                                    <td>9876543343</td>
                                    <td>AB-</td>
                                 
                                    <td>
                                    <Button ><FontAwesomeIcon icon={faAdd}  /></Button>

                                    </td>
                                    <td> <Tooltip title="Delete">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Tooltip></td>
                                </tr>
                                <tr >
                                    <td>Biju thankappan</td>
                                    <td>9876543343</td>
                                    <td>AB-</td>
                                 
                                    <td>
                                        <Button ><FontAwesomeIcon icon={faAdd}  /></Button>

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
        </TabPanel>
       
      </TabContext>
    </Box>
  );
}
