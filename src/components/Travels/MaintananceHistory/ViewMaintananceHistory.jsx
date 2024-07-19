import React from 'react'
import { Image, Table } from 'react-bootstrap'

export default function ViewMaintananceHistory() {
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
          
          <td>Vehicle Model</td>
          <td>Innova</td>
     
        </tr>
        <tr>
          
          <td>Maintanance Part</td>
          <td>Break</td>
     
        </tr>
        <tr>
          
          <td>Comment</td>
          <td>Car engine out completely</td>
     
        </tr>
        <tr>
        <td>Bill Image</td>
        <td> <Image src="public\assets\empty-christian-church-building.jpg" rounded style={{height:'100px',width:'150px'}}/></td>
        </tr>

       

       
      </tbody>
    </Table>
    </div>
  )
}

