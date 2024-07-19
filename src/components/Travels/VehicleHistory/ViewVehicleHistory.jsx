
import React from 'react'
import { Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ViewVehicleHistory() {
  return (
    <div>
        
        <Table  striped bordered  size="xl"  >
      <thead>
        <tr>
         
          <th>Date</th>
          <th>03/07/2024</th>
       
        </tr>
      </thead>
      <tbody  >
        <tr>
        
          <td>Vehicle Number</td>
          <td>KL-09-A-23454</td>
         
        </tr>
        <tr>
          
          <td>Kilometer</td>
          <td>34</td>
     
        </tr>


       

       
      </tbody>
    </Table>
    </div>
  )
}
