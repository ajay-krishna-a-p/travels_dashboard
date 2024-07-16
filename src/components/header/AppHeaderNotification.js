/* eslint-disable prettier/prettier */

import React ,{useState,useEffect} from 'react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,

  } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
  } from '@coreui/react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch,faAngleDown, faAngleUp, faArrowDown, faArrowUp,faPlus, faEdit, faEllipsisH,faTags, faExternalLinkAlt, faEye, faTrashAlt,faQuestionCircle,faArrowRight,faHeart,faXmark,faCircle} from '@fortawesome/free-solid-svg-icons';
import { Alert, Badge, Col, DropdownItem, DropdownItemText, Row,ListGroup } from 'react-bootstrap';


const AppHeaderNotification = () => {
  return (
    <div>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Badge style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '10px',}} bg='danger'>4</Badge>
            <CIcon icon={cilBell} size="lg" style={{color:'white'}}/>
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0 " placement="bottom-end" style={{ maxHeight: '500px',minWidth:'300px', overflowY: 'auto' }} >
       
          <CDropdownHeader className="bg-body-secondary fw-semibold mb-2" style={{backgroundColor:'blue'}}>Messages</CDropdownHeader>
          <div>
          <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio  Cras justo odio  Cras justo odio Cras justo odio Cras justo odio Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
       <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
          </div>
         
    
          </CDropdownMenu>
      </CDropdown>
    </div>
  )
}

export default AppHeaderNotification; // Ensure this line is present

