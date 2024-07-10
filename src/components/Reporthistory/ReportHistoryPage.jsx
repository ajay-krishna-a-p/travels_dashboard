import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Config/Config';
import { data } from 'autoprefixer';
import { Button, Card, CardBody, Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { Chip } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ReportHistoryPage() {

    const [reportHistory,setreportHistory] = useState([]);
    const [date1,setdate1]=useState(new Date())
    const [date2,setdate2]=useState(new Date())
    const handleDateChange1 = date => {
        setdate1(date);
    };
    const handleDateChange2 = date => {
        setdate2(date);
    };


    const[alldocs,setalldocs]=useState([])
    const handleDatesearch=async()=>{
      setalldocs([])
        date1.setHours(0);
      date1.setMinutes(0);
      date1.setSeconds(0);
      date1.setMilliseconds(0);
      date2.setHours(23);
      date2.setMinutes(59);
      date2.setSeconds(59);
      date2.setMilliseconds(999);

        const q = query(
          collection(db,`report_history`),
          orderBy("createdAt","desc"),
         where("createdAt", ">=", date1),
      where("createdAt", "<=", date2),
      );

    onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setalldocs(docs);
    });


    }

    useEffect(()=>{
        handleQuery();
    },[])

  const handleQuery = () => {
     const q = query(collection(db,"report_history"),orderBy("date"));
     setreportHistory(null);
     fetchData(q);
    }
    const fetchData = async (q) =>
        {
            setreportHistory(null);
            const unsubscribe = onSnapshot(q,(snapshot) => {
                const newData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }));
                setreportHistory(newData)
            });
        }
  return (
    <div>
        <Card>
            <CardBody>
            <Col style={{display:'flex'}} className='mb-3'>
    <DatePicker
           type="date"
            selected={date1}

            onChange={handleDateChange1}
            dateFormat="dd/MM/yyyy"
            className="form-control"
             placeholderText='From'


        />
         &nbsp;


    <DatePicker
        selected={date2}
        onChange={handleDateChange2}
        dateFormat="dd/MM/yyyy"

        className="form-control"
         type="date"
         placeholderText='To'
    />
  &nbsp;


<Col ><Button variant="success" onClick={handleDatesearch} style={{color:'white'}}>Sort</Button></Col>
</Col>
<Row >
              <Col xs={8}  lg={3} xl={4} >
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control
          type="text"
          placeholder="Search by Name/Email/Number"
          onChange={(e) => handleSearch(e.target.value)}
        />
                </InputGroup>
                </Col>
            </Row>
            {reportHistory !== null &&
        reportHistory.map((doc)=>
        <Card key={doc.id} style={{borderRadius:'20px',}} className='mt-2'>
            <CardBody >
            <Col style={{textAlign:'right'}}></Col>
          <Row style={{justifyContent:'center',justifyItems:'center',alignContent:'center',alignItems:'center'}}>
            <Col >
            <Image src='\assets\profile_13014933.png' style={{width:'100px',height:'100px'}} className='mt-2' ></Image>
           
            </Col>
            <Col className='mt-2' md='8'><span style={{fontSize:'25px',fontFamily:'sans-serif',fontWeight:'bold'}}>{doc.data.user_name}</span>&nbsp;&nbsp;
            <Chip label={doc.data.report_status} color='primary'></Chip>
            <Row className='mt-2'><Col><span style={{fontFamily:'initial'}}>{doc.data.user_email}</span></Col></Row>
            <Row><Col><span style={{fontSize:'18px',fontFamily:'revert'}}>{doc.data.description}</span></Col></Row>
           </Col>
           <Col style={{display:'flex'}} className='mt-2'><Chip color="primary" label={doc.data.date?new Date(doc.data.date.seconds*1000).toLocaleTimeString():"N/A"} variant='outlined'></Chip>
           &nbsp;
           <Chip color="primary" label={doc.data.date?new Date(doc.data.date.seconds*1000).toLocaleDateString():"N/A"} variant='outlined'></Chip></Col>
           

          </Row>
            </CardBody>
        </Card>
        )}
            </CardBody>
        </Card>
        
       </div>
  )
}
