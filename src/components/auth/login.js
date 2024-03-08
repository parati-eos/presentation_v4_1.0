import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { FaUser, FaLock } from "react-icons/fa"; // Assuming you have imported these icons
import { jwtDecode } from "jwt-decode";
import LoginImage from "../Asset/LoginImage.png";
import LoginNavbar from '../shared/js/LoginNavbar.js'
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem("userEmail", decoded.email);
    console.log(decoded);

    fetch(`https://pitchdeck-server.onrender.com/store-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: decoded }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User data stored:", data);
      })
      .catch((error) => {
        console.error("Error storing user data:", error);
      });

    // Redirect to success.js upon successful login
    navigate("/applicationLanding", { state: { user: decoded } });
  };

  return (
    <div className="main-container">
      <LoginNavbar/>
      <div className="login-container">
        <div className="login-image-container">
          <img src={LoginImage}></img>
        </div>
        <div className="login-details-container">
          <div className="wrapper">
            <h1>Login</h1>
            <form action="">
              <div className="input-box">
                <div className="details">
                  <p>Email Address</p>
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="details">
                  <p>Password</p>
                  <input type="password" placeholder="Password" required />
                </div>
              </div>
              <div className="forgot">
                  <a href="#">Forgot password?</a>
              </div>
              <div className="login-button">
                <button type="submit">Login</button>
              </div>
              <div className="register-link">
                <p>
                  Don't have an account? <a href="#">Register</a>
                </p>
              </div>
            </form>
            <div className="google-login">
              <GoogleOAuthProvider clientId="1053104378274-jchabnb9vv91n94l76g97aeuuqmrokt9.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
