import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Frameworks</h1>
        </div>
        <div className="hero-buttons">
          <button className="hero-signup">Sign Up</button>
          <p className="hero-powered">Powered by AI</p>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db45ba350c2c895526f03ba01f84b83d509a0584bb4aba4a97754594a163be3?apiKey=0207d5bfc5324d61add836f912ae7296&"
        alt="Hero Image"
        className="hero-image"
      />
    </div>
  );
};

export default Hero;