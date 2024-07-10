import React from 'react'
import classNames from 'classnames'
import { Form, Row, Col, Button, Accordion, InputGroup, Card, Image, Badge } from 'react-bootstrap';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsD,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { LineChart, PieChart } from '@mui/x-charts';

const Dashboard = () => {
  // const progressExample = [
  //   { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  //   { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  //   { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  //   { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  //   { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  // ]

  // const progressGroupExample1 = [
  //   { title: 'Monday', value1: 34, value2: 78 },
  //   { title: 'Tuesday', value1: 56, value2: 94 },
  //   { title: 'Wednesday', value1: 12, value2: 67 },
  //   { title: 'Thursday', value1: 43, value2: 91 },
  //   { title: 'Friday', value1: 22, value2: 73 },
  //   { title: 'Saturday', value1: 53, value2: 82 },
  //   { title: 'Sunday', value1: 9, value2: 69 },
  // ]

  // const progressGroupExample2 = [
  //   { title: 'Male', icon: cilUser, value: 53 },
  //   { title: 'Female', icon: cilUserFemale, value: 43 },
  // ]

  // const progressGroupExample3 = [
  //   { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  //   { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  //   { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  //   { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  // ]

  // const tableExample = [
  //   {
  //     avatar: { src: avatar1, status: 'success' },
  //     user: {
  //       name: 'Yiorgos Avraamu',
  //       new: true,
  //       registered: 'Jan 1, 2023',
  //     },
  //     country: { name: 'USA', flag: cifUs },
  //     usage: {
  //       value: 50,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'success',
  //     },
  //     payment: { name: 'Mastercard', icon: cibCcMastercard },
  //     activity: '10 sec ago',
  //   },
  //   {
  //     avatar: { src: avatar2, status: 'danger' },
  //     user: {
  //       name: 'Avram Tarasios',
  //       new: false,
  //       registered: 'Jan 1, 2023',
  //     },
  //     country: { name: 'Brazil', flag: cifBr },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'info',
  //     },
  //     payment: { name: 'Visa', icon: cibCcVisa },
  //     activity: '5 minutes ago',
  //   },
  //   {
  //     avatar: { src: avatar3, status: 'warning' },
  //     user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
  //     country: { name: 'India', flag: cifIn },
  //     usage: {
  //       value: 74,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'warning',
  //     },
  //     payment: { name: 'Stripe', icon: cibCcStripe },
  //     activity: '1 hour ago',
  //   },
  //   {
  //     avatar: { src: avatar4, status: 'secondary' },
  //     user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
  //     country: { name: 'France', flag: cifFr },
  //     usage: {
  //       value: 98,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'danger',
  //     },
  //     payment: { name: 'PayPal', icon: cibCcPaypal },
  //     activity: 'Last month',
  //   },
  //   {
  //     avatar: { src: avatar5, status: 'success' },
  //     user: {
  //       name: 'Agapetus Tadeáš',
  //       new: true,
  //       registered: 'Jan 1, 2023',
  //     },
  //     country: { name: 'Spain', flag: cifEs },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'primary',
  //     },
  //     payment: { name: 'Google Wallet', icon: cibCcApplePay },
  //     activity: 'Last week',
  //   },
  //   {
  //     avatar: { src: avatar6, status: 'danger' },
  //     user: {
  //       name: 'Friderik Dávid',
  //       new: true,
  //       registered: 'Jan 1, 2023',
  //     },
  //     country: { name: 'Poland', flag: cifPl },
  //     usage: {
  //       value: 43,
  //       period: 'Jun 11, 2023 - Jul 10, 2023',
  //       color: 'success',
  //     },
  //     payment: { name: 'Amex', icon: cibCcAmex },
  //     activity: 'Last week',
  //   },
  // ]


  //user interaction graph
  const chartSetting = {

    width: 500,
    height: 400,

  };

  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      name: 'Ajay',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      name: 'Amal',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      name: 'Athul',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      name: 'Adicx',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      name: 'Abhijith',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      name: 'Don',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      name: 'Kenmerk',
    },

  ];


  //product analysis graph
  const chartSetting1 = {

    width: 700,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset1 = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: '12-03-2024',

    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: '13-03-2024',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: '14-03-2024',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: '15-03-2024',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: '16-03-2024',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: '17-03-2024',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: '18-03-2024',
    },
  ];
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    //Admin analysis graph
    const chartSetting5 = {

      width: 700,
      height: 300,
      sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translate(-20px, 0)',
        },
      },
    };
    const dataset5 = [
      {
        london: 59,
        paris: 57,
        newYork: 86,
        seoul: 21,
        month: '12-03-2024',
  
      },
      {
        london: 50,
        paris: 52,
        newYork: 78,
        seoul: 28,
        month: '13-03-2024',
      },
      {
        london: 47,
        paris: 53,
        newYork: 106,
        seoul: 41,
        month: '14-03-2024',
      },
      {
        london: 54,
        paris: 56,
        newYork: 92,
        seoul: 73,
        month: '15-03-2024',
      },
      {
        london: 57,
        paris: 69,
        newYork: 92,
        seoul: 99,
        month: '16-03-2024',
      },
      {
        london: 60,
        paris: 63,
        newYork: 103,
        seoul: 144,
        month: '17-03-2024',
      },
      {
        london: 59,
        paris: 60,
        newYork: 105,
        seoul: 319,
        month: '18-03-2024',
      },
    ];
    const uData5 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];

    //add vs sold graph
    const uData7 = [100, 50, 40, 70, 10, 90, 80];
const pData7 = [90, 70, 89, 100, 12, 20, 40];
const xLabels7 = [
  '01-06-2024',
  '02-06-2024',
  '03-06-2024',
  '04-06-2024',
  '05-06-2024',
  '06-06-2024',
  '07-06-2024',
];


  //settlement analysis graph
  const xLabels = [
    '12-03-2024',
    '13-03-2024',
    '14-03-2024',
    '15-03-2024',
    '16-03-2024',
    '17-03-2024',
    '18-03-2024',
  ];

  //settlement category graph
  const pData = [100, 80, 70, 30, 60, 20, 10];
const xLabels1 = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
  'Category 7',
];

  return (
    <>
    <Row className='mb-2'>
    <CCol sm={6} xl={4} xxl={3}>
      <CWidgetStatsD


          icon={<Image src='\assets\personalized-support_16344954.png' style={{ width: '100px', height: '100px' }}></Image>}
          values={[

            {   value:<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

            <span>Total Admins</span>

            30


          </div> },

          ]}
          style={{
            '--cui-card-cap-bg': '##fff',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
      <CWidgetStatsD


          icon={<Image src='\assets\group_5342733.png' style={{ width: '100px', height: '100px' }}></Image>}
          values={[

            {   value:<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

            <span>Total Users</span>

            2899


          </div> },

          ]}
          style={{
            '--cui-card-cap-bg': '##fff',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
      <CWidgetStatsD


          icon={<Image src='\assets\box_6130688.png' style={{ width: '100px', height: '100px' }}></Image>}
          values={[

            {   value:<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

            <span>Total Products</span>

           45


          </div> },

          ]}
          style={{
            '--cui-card-cap-bg': '##fff',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
      <CWidgetStatsD


          icon={<Image src='\assets\agreement_10307161.png' style={{ width: '100px', height: '100px' }}></Image>}
          values={[

            {   value:<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

            <span>Total Settlement</span>

             38


          </div> },

          ]}
          style={{
            '--cui-card-cap-bg': '##fff',
          }}
        />
      </CCol>
    </Row>
   
    <Row className='mt-2'>

      <Col className='mt-2' md='6'> <Card className="d-flex" style={{ height: '100%' }}>
        <Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>Product Analysis</span>
     </Col>
      <Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <BarChart
      dataset={dataset1}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'Active'},
        { dataKey: 'paris', label: 'Pending', },
        { dataKey: 'newYork', label: 'Rejected', },
      ]}
      {...chartSetting1}
    />
        </div>
        </Card></Col>
    <Col className='mt-2' md='6'>
      <Card className="d-flex" style={{ height: '100%' }}>
      <Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>Settlement Analysis</span>
     </Col>
      <Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LineChart
         xAxis={[{ scaleType: 'point', data: xLabels }]}

      series={[
        {
          data: [80, 100, 50, 28, 43, 75,10],
        },
      ]}
      width={600}
      height={300}
      style={{ width: '100%', height: '100%' }}
    />
        </div>

      </Card>
      </Col>

    </Row>
    <Row >

      <Col md='6' className='mt-2'><Card className="d-flex" style={{ height: '100%' }}>

      <Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>Featured <span style={{color:'blue'}}>VS</span> Not Featured Analysis</span>
     </Col>
      <Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 70, label: 'Featured' },
            { id: 1, value: 50, label: 'Not Featured' },

          ],
        },
      ]}
      width={400}
      height={200}
      style={{ width: '100%', height: '100%' }}
    />
          </div></Card></Col>
    <Col md='6' className='mt-2'><Card className="d-flex" style={{ height: '100%' }}>

    <Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>Settlement Category</span>
     </Col>
      <Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>
      <div  style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BarChart
      width={600}
      height={300}
      series={[
        { data: pData,id: 'pvId' },

      ]}
      xAxis={[{ data: xLabels1, scaleType: 'band' }]}
    />
      </div>
      </Card></Col>
    </Row>
    <Row className='mt-2 mb-2'>

<Col md='6' ><Card className="d-flex" style={{ height: '100%' }}>

<Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>User Interaction</span>
     </Col>
      <Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <BarChart
    
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
      series={[{ dataKey: 'seoul', label: 'Data', }]}
      layout="horizontal"
      {...chartSetting}
      style={{ width: '100%', height: '100%' }}
    />
  </div>
   </Card></Col>
   <Col  md='6'> <Card className="d-flex" style={{ height: '100%' }}>
  <Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>Admin Analysis</span>
</Col>
<Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>

  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

  <BarChart
dataset={dataset5}
xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
series={[
  { dataKey: 'london', label: 'Active'},
  { dataKey: 'paris', label: 'Pending', },
  { dataKey: 'newYork', label: 'Rejected', },
]}
{...chartSetting5}
/>
  </div>

  </Card></Col>
    </Row>
    <Row className='mt-2'>


  <Col className='mt-2' md='6'> <Card className="d-flex" style={{ height: '100%' }}>
  <Row style={{padding:'10px'}}><Col>  <span style={{fontWeight:'bold'}}>Add Vs Sold Analysis</span>
</Col>
<Col style={{textAlign:'right'}}> <Button variant='success' style={{color:'white'}}>Export</Button></Col></Row>

  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

  <BarChart
      width={700}
      height={300}
      series={[
        { data: pData7, label: 'Add', id: 'pvId' },
        { data: uData7, label: 'Sold', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels7, scaleType: 'band' }]}
    />
  </div>
  
  </Card></Col>
  </Row>

      {/* <WidgetsDropdown className="mb-4" />
      hi
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsBrand className="mb-4" withCharts />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-body-secondary small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Payment Method
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default Dashboard
