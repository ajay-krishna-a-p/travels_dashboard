import React from 'react'
import { Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ViewDriverDocument() {
  return (
    <div>
        <div style={{padding:'10px'}}>
            
        "Your profile is incomplete. Some fields are missing. You need to upload your <span style={{fontWeight:'bold'}}>email</span> and <span style={{fontWeight:'bold'}}>Aadhaar copy</span>."<Link className='mr-3'>Click to fill</Link>
        </div>
        <Table  striped bordered  size="xl"  >
      <thead>
        <tr>
         
          <th>Driver Name</th>
          <th>Ajay</th>
       
        </tr>
      </thead>
      <tbody  >
        <tr>
        
          <td>Email</td>
          <td>ajaykenmerk@gmail.com</td>
         
        </tr>
        <tr>
          
          <td>Contact Number</td>
          <td>7654321890</td>
     
        </tr>

 <tr>
          
          <td>Alternate Number</td>
          <td>9876543210</td>
     
        </tr>
        <tr>
          
          <td>Address </td>
          <td>Dhottappan kulam, Sulthan Bathery</td>
     
        </tr>

         <tr>
          
          <td>Driver Image</td>
          <td> <Image src="public\assets\empty-christian-church-building.jpg" rounded style={{height:'100px',width:'150px'}}/></td>
     
        </tr>
        <tr>
          
          <td>License Copy</td>
          <td><Image src="public\assets\empty-christian-church-building.jpg" rounded style={{height:'100px',width:'150px'}}/></td>
     
        </tr>
         
         <tr>
          <td>Aadhar Copy</td>
          <td><Image src="public\assets\empty-christian-church-building.jpg" rounded style={{height:'100px',width:'150px'}}/></td>
        </tr>

        
         {/* <tr>
          <td>Photo </td>
          <td><img src={location.state.data.photoURL?location.state.data.photoURL:""} alt="photo"/></td>
        </tr> */}

         <tr>
          <td>Password</td>
          <td> asdf34</td>
        </tr>

        

       

       
      </tbody>
    </Table>
    </div>
  )
}
