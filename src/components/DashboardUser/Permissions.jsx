/* eslint-disable prettier/prettier */
import React from 'react'
import { Card, CardBody, Image, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'


const compressPermissions = (permissions) => {
  const result = {};

  permissions.forEach((perm) => {
    const match = perm.match(/^(.*?)(read|add|update|delete)$/);
    if (match) {
      const [, pageName, action] = match;
      if (!result[pageName]) {
        result[pageName] = {};
      }
      result[pageName][action] = true;
    }
  });

  return Object.entries(result).map(([pageName, actions]) => ({ pageName, actions }));
};

export default function Permissions() {
    const location = useLocation();
  const compressedData = compressPermissions(location.state.data.permissions);



  return (
    <div>
      {    console.log(location.state.data.permissions)}

              <Table striped bordered size="xl">
      <thead>
        <tr>
          <th>Page Name</th>
          <th>Read</th>
          <th>Add</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {compressedData.map((item, index) => (
          <tr key={index}>
            <td>
              <Image src='\assets\authorization_13659782.png' style={{ height: '30px', width: '30px' }} />
              &nbsp;&nbsp;
              <span style={{ fontWeight: 'bolder' }}>{item.pageName}</span>
            </td>
            <td>
              <input type="checkbox" checked={!!item.actions.read} readOnly />
            </td>
            <td>
              <input type="checkbox" checked={!!item.actions.add} readOnly />
            </td>
            <td>
              <input type="checkbox" checked={!!item.actions.update} readOnly />
            </td>
            <td>
              <input type="checkbox" checked={!!item.actions.delete} readOnly />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

    </div>
  )
}
