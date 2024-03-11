import React from "react";
import { useNavigate } from "react-router-dom";
import heroAssetImage1 from "../../Asset/Ellipse1.png";
import heroAssetImage2 from "../../Asset/Ellipse2.png";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/auth/login");
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-title">
            <div className="hero-title-r1">Get a Branded</div>
            <div className="hero-title-r2">
              <div className="hero-title-r2-c1">Pitch Deck&nbsp;</div>
              <div className="hero-title-r2-c2">Built on</div>
            </div>
            <div className="hero-title-r3">Proven Frameworks</div>
          </div>
        </div>
        <div className="hero-buttons">
          <div className="hero-buttons-elements">
            <button className="hero-signup" onClick={handleSignUpClick}>
              Sign Up
            </button>
            <div className="hero-powered">Powered by AI</div>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db45ba350c2c895526f03ba01f84b83d509a0584bb4aba4a97754594a163be3?apiKey=0207d5bfc5324d61add836f912ae7296&"
          alt="Hero Image"
          className="hero-image"
        />
      </div>
      <div className="hero-asset">
        <div className="hero-asset1">
          <img src={heroAssetImage1}></img>
        </div>
        <div className="hero-asset2">
          <img src={heroAssetImage2}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
