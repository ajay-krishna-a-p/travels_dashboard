/* eslint-disable prettier/prettier */
import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier ,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
 import {app,db} from '../../../components/Config/Config.js'
import { useNavigate } from 'react-router-dom';
// import loginlogo from '../../../assets/Group_323.png'
import Lottie from 'react-lottie';
import animationData from '../../../assets/loginanimation.json'
import { useToast } from '../../../components/UserContext/Toastcontext.jsx';
import ReportHistory from '../../../components/Reporthistory/Reporthistory.jsx'
import { useUser } from '../../../components/UserContext/UserContext.js'
import { Image } from 'react-bootstrap'
const Login = () => {
const { addToast } = useToast();
const { permission }= useUser();

  const navigate = useNavigate();
  const auth = getAuth(app);
   const provider = new GoogleAuthProvider();
       const [e_mail, sete_mail] = useState('');
    const [password, setpassword] = useState('');
      const [message, setmessage] = useState('');

  const [error, setError] = useState('');
       const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutDuration, setLockoutDuration] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

const user_validation = (e) => {
  e.preventDefault();



// Your password input value here

  signInWithEmailAndPassword(auth, e_mail, password)
    .then((userCredential) => {
       const user = userCredential.user;
      setShowPrimary(true);
     animateProgress();
     ReportHistory(e_mail, "login", "logged in",user.uid).then((result)=>{
      addToast("login");
          
          });
       
      setTimeout(handleClosePrimary, 3000);
    })
    .catch((error) => {
      const errorMessage = error.message;
   
      ReportHistory("Authenticationerror", "loginerror",`an unknown user attempted using this email- ${e_mail} and passoword-  ${password} `).then((result)=>{
        addToast("passworderror");
            
            });


  if (errorMessage === 'auth/wrong-password') {

   setAttempts(attempts + 1);

      // Check if the maximum number of attempts is reached
      if (attempts >= 1) {
        setIsLocked(true);
        localStorage.setItem('isLocked', true); // Store lock state in local storage
        setError('Your account is locked due to multiple failed attempts. Please try again later.');
        setTimeout(() => {
          setIsLocked(false);
          localStorage.removeItem('isLocked'); // Remove lock state from local storage
          setAttempts(0);
          setError('');
        }, 3600000); // Lock for 1 hour (3600000 milliseconds)
      } else {
        setError('Incorrect password. Please try again.');
      }
                setShowPrimary(true);

        setErrorMessage(error.message);
        //  setTimeout(handleClosePrimary, 3000);

    } else {
      // Handle other types of errors
     setAttempts(attempts + 1);

      // Check if the maximum number of attempts is reached
      if (attempts >= 1) {
        setIsLocked(true);
        localStorage.setItem('isLocked', true); // Store lock state in local storage
        setError('Your account is locked due to multiple failed attempts. Please try again later.');
        setTimeout(() => {
          setIsLocked(false);
          localStorage.removeItem('isLocked'); // Remove lock state from local storage
          setAttempts(0);
          setError('');
        }, 3600000); // Lock for 1 hour (3600000 milliseconds)
      } else {
        setError('Incorrect Email. Please try again.');
      }
                setShowPrimary(true);


    setErrorMessage(error.message);
        //  setTimeout(handleClosePrimary, 3000);
      // Set error state or perform other generic error handling actions
    }
    }
    );
};





 const [progress, setProgress] = useState(0);


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





    const [showPrimary, setShowPrimary] = useState(false);
const [showTertiary, setShowTertiary] = useState(true);
const date=new Date();

 const handleClosePrimary = () => {
    setShowPrimary(false);
   navigate("/")
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={7}>
            <CCardGroup  style={{textAlign:'center',justifyContent:'center'}}>
              <CCard className="p-4 text-center">
                <CCardBody className="text-center mt-7" style={{textAlign:'center'}}>
                {/* <h3 style={{textAlign:'center',fontFamily: 'monospace'}} className='mb-3'>Land of Jewels</h3> */}
                  <CForm onSubmit={user_validation} >
                    {/* <img src={loginlogo} style={{ width: '90px', height: 'auto' , justifyContent:'center'}}/> */}
                    <h6 style={{textAlign:'left'}} className='mb-3'>Login</h6>
                    {/* <p className="text-body-secondary">Sign In to your account</p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username"     value={e_mail}
                    onChange={(e) => sete_mail(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                            value={password}
                    onChange={(e) => setpassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow >
                      <CCol xs={6} style={{textAlign:'left'}}>
                        <CButton type='submit' color="primary" className="px-4" style={{borderRadius:'25px'}}>
                          Login
                        </CButton>
                      </CCol>

                    </CRow>
                  </CForm>
                    {/* <CCol xs={6} style={{textAlign:'left'}}>
                        <CButton onClick={onclick}color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol> */}
                </CCardBody>
              </CCard>
               <CCard  style={{ width: '4%', }}>
                <CCardBody className="text-center" style={{alignContent:'center'}}>
                <Image src='\assets\transport.png' style={{height:'200px',width:'200px'}}/>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )

}

export default Login
