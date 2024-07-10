import React ,{useEffect,useState} from 'react';


const Alerts = ({ showDanger, showSuccess, showPrimary, showSecondary, showWarning, showInfo, showLight, showDark,message,booleanVariable }) => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the alert when either danger or success is true
    if (showDanger || showSuccess || showWarning) {
      setIsVisible(true);
      // Hide the alert after 3 seconds
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      // Clean up the timeout when the component unmounts or when the alert is hidden
      return () => clearTimeout(timeout);
    }
  }, [showDanger, showSuccess,booleanVariable,showWarning]);
  
    return (
       <div className="fixed-top" style={{ zIndex: 9999 }}>
    
      {/* Conditionally render the danger alert based on showDanger prop */}
      {showDanger && isVisible && (
        <div className="alert alert-danger" role="alert">
         {message}
        </div>
      )}

      {/* Conditionally render the success alert based on showSuccess prop */}
      {showSuccess && isVisible &&  (
        <div className="alert alert-success" role="alert">
          Success message here
        </div>
      )}

      {/* Conditionally render the primary alert based on showPrimary prop */}
      {showPrimary &&  isVisible && (
        <div className="alert alert-primary" role="alert">
          Primary message here
        </div>
      )}

      {/* Conditionally render the secondary alert based on showSecondary prop */}
      {showSecondary && isVisible && (
        <div className="alert alert-secondary" role="alert">
          Secondary message here
        </div>
      )}

      {/* Conditionally render the warning alert based on showWarning prop */}
      {showWarning && isVisible &&  (
        <div className="alert alert-warning" role="alert">
          {message}
        </div>
      )}

      {/* Conditionally render the info alert based on showInfo prop */}
      {showInfo && isVisible &&  (
        <div className="alert alert-info" role="alert">
          Info message here
        </div>
      )}

      {/* Conditionally render the light alert based on showLight prop */}
      {showLight && isVisible&& (
        <div className="alert alert-light" role="alert">
          Light message here
        </div>
      )}

      {/* Conditionally render the dark alert based on showDark prop */}
      {showDark && isVisible &&  (
        <div className="alert alert-dark" role="alert">
          Dark message here
        </div>
      )}
    </div>
  );
};

export default Alerts;
