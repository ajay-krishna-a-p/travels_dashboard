/* eslint-disable prettier/prettier */
import React ,{useState}from 'react'
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
import {app,db} from '../Config/Config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useToast } from '../../components/UserContext/Toastcontext.jsx';
import ReportHistory from '../../components/Reporthistory/Reporthistory.jsx'
import { useUser } from '../UserContext/UserContext.js'



const AppHeaderDropdown = () => {
  const { addToast } = useToast();
  const {permission} = useUser();


  const auth=getAuth(app)
   const handleLogout = () => {

    ReportHistory(permission, "logout", "user log out").then((result)=>{
    
     
      addToast("logout");
          });
    auth
      .signOut()
      .then(() => {
        // Set user to null or perform any other cleanup
        // This assumes you are using some user state variable in your component
       
         
       
      })
      .catch((err) => {
        ReportHistory(permission, "error", err).then((result)=>{
          addToast("error");
    
              });
  
      });
  };
  const animateProgress = () => {
    let startTime;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const newProgress = (elapsedTime / duration) * 100;

      setProgress(newProgress);

      if (elapsedTime < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar  size="md" style={{color:'white'}}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></CAvatar>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem href="/profile">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownDivider /> */}
        <CDropdownItem >
          <CIcon icon={cilUser} className="me-2" />
         {auth.currentUser.email}
        </CDropdownItem>
        <CDropdownItem onClick={handleLogout} href="/">
          <CIcon icon={cilLockLocked} className="me-2" />
          Sign Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
