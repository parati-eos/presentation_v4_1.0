import React, { useState, useEffect } from 'react';
import './Loading.css'; // Import your CSS file for styling

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`loading-page ${loading ? 'loading' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingPage;