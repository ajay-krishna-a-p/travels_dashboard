/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Toast } from 'react-bootstrap';
import './toastAnimations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from FontAwesome

// Import the necessary icons from FontAwesome
import { faExclamationTriangle, faInfoCircle, faCheckCircle, faTimesCircle, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const ToastMessage = ({ type, show, onClose }) => {
  const getMessageType = (type) => {
   switch (type) {
    case 'warning':
      return { className: 'warning', title: 'Warning', message: 'There is a warning . Please review and take necessary actions.', icon: faExclamationTriangle };
    case 'danger':
         return { className: 'danger', title: 'Error', message: 'An error occurred in the dashboard. Please investigate and resolve the issue.', icon: faTimesCircle };
    case 'delete':
         return { className: 'delete', title: 'Removed', message: 'The item has been removed', icon: faInfoCircle };
    case 'error':
      return { className: 'error', title: 'Error', message: 'An error occurred in the dashboard. Please investigate and resolve the issue.', icon: faCheckCircle  };
    case 'update':
      return { className: 'update', title: 'Updated', message: 'The Application has been updated with new information.', icon: faInfoCircle };
    case 'add':
      return { className: 'add', title: 'Added', message: 'New data has been successfully added to the Application.', icon: faSignInAlt };
    case 'status':
      return { className: 'status', title: 'Status', message: 'The status of the Product has been changed.', icon: faSignOutAlt };
    case 'login':
      return { className: 'login', title: 'Authentcation', message: 'You have successfully logged in to the dashboard.', icon: faSignInAlt };
    case 'passworderror':
      return { className: 'passworderror', title: 'Authentcation Error', message: 'Your credentials are Incorrect,please check' , icon: faSignOutAlt};
      case 'logout':   
      return { className: 'logout', title: 'Authentcation', message: 'You have successfully logged out from the dashboard.' , icon: faSignOutAlt};
      case 'newuser':
        return { className: 'add', title: 'User Created', message: 'New user has been successfully created .', icon: faSignInAlt };
    default:
      return { className: 'primary', title: 'Info', message: 'Information about the dashboard.', icon: faInfoCircle  };
  }
  };

  const { className, title, message, icon  } = getMessageType(type);
  const messageContent = message ;

  return (
    <Toast onClose={onClose} show={show} delay={3000} autohide className={`animated ${show ? 'toast-enter' : 'toast-exit'} ${className}`}  >
      <Toast.Header>
            <FontAwesomeIcon icon={icon} className={`me-2 text-${className}`} /> {/* Render icon before the title */}
         <strong className={`me-auto text-${className}`}>{title}</strong>
      </Toast.Header>
     <Toast.Body >
        {messageContent}
      </Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
