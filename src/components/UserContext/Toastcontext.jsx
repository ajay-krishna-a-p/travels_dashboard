/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react'
import ToastMessage from '../Toast/Toastmessage';
import { ToastContainer } from 'react-bootstrap';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts([...toasts, { id, type, message }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer position="top-end" className="p-3">
        {toasts.map((toast) => (
          <ToastMessage
            key={toast.id}
            type={toast.type}
            message={toast.message}
            show={true}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};
