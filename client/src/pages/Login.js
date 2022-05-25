import React from "react";
import { GoogleLogin } from "react-google-login"; 
// installation: npm install react-google-login --legacy-peer-deps

const Login = () => {
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
  };

  return (
    <div className="googleapp-header">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
};

export default Login;
