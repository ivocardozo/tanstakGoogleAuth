// import { GoogleLogin } from "react-google-login";
// import { useGoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";

// const clientId = "913528233277-erdag2nqhs9l5mnmn2lh7nae6lnblefp.apps.googleusercontent.com";

// function Login() {
//     const navigate = useNavigate();

//     const login = useGoogleLogin({
//         onSuccess: (tokenResponse) => {
//             console.log(tokenResponse);
//             //Store the token in local storage or a cookie
//             localStorage.setItem('googleToken', tokenResponse.access_token);
//             //Redirect to a protected route
//             navigate('/events') //Example route
//         },
//         onError: (error) => {
//             console.log('Login Failed: ', error);
//         },
//     });
    
//     const handleLogout = () => {
//         googleLogout();
//         localStorage.removeItem('googleToken');
//         // Redirect to login or home page
//         navigate('/');
//     };

//     return (
//         <div>
//             <button onClick={login}>Login with Google</button>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     )
// }

// export default Login;
import React from 'react';
import { GoogleLogin, googleLogout } from 'react-google-login';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const clientId = "913528233277-erdag2nqhs9l5mnmn2lh7nae6lnblefp.apps.googleusercontent.com";
// const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

function Login() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      // Store the token in local storage or a cookie
      localStorage.setItem('googleToken', tokenResponse.access_token);
      // Redirect to a protected route
      navigate('/events'); // Example route
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  });

  const handleLogout = () => {
    googleLogout(); 
    localStorage.removeItem('googleToken');
    // Redirect to login or home page
    navigate('/'); 
  };

  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
