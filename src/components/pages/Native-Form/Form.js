import React, { useState, useEffect } from 'react';
import './NativeForm.css'; // Assuming you have a CSS file for styling
import AboutCompany from './AboutCom';
import ProblemsAndSolutions from './problem';
import MarketSize from './MarketSize';
import Product from './product'; // Import the Product component
import Navbar from '../../shared/js/LoginNavbar';

const Form = () => {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    establishmentYear: '',
    companyOverview: '',
    tagline: '',
    inspiration: '',
    solutions: '',
    sector: '',
    othersDescription: '',
    marketDescription: '',
    TAM: '',
    TAMGrowthRate: '',
    SAM: '',
    SAMGrowthRate: '',
    productOverview: '',
    productRoadmap: '',
    productRoadmapDescription: '',
    productInterface: '',
    mobileScreenshots: [],
    webScreenshots: [],
    technicalArchitecture: ''
  });

  const [formId, setFormId] = useState('');

  useEffect(() => {
    // Generate a unique form ID when the component mounts for the first time
    const newFormId = generateFormId();
    setFormId(newFormId);
    console.log('Form ID:', newFormId);
    // Fetch user email from local storage
    const userEmail = localStorage.getItem('userEmail');
    console.log('User Email:', userEmail);
  }, []); // Empty dependency array to run this effect only once

  const generateFormId = () => {
    // Generate a random unique ID using timestamp and random numbers
    return 'FORM-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Check if the input type is 'file' (for screenshot uploads) and handle differently
    if (type === 'file') {
      const files = Array.from(e.target.files);
      setFormData(prevState => ({
        ...prevState,
        [name]: files.slice(0, 3) // Limit to the first 3 files
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation logic to check if all mandatory fields are filled
    if (
      section === 1 &&
      (!formData.companyName.trim() || !formData.establishmentYear || !formData.companyOverview.trim() || !formData.tagline.trim())
    ) {
      alert("Please fill in all mandatory fields in the first section.");
      return;
    } else if (section === 2 && (!formData.inspiration.trim() || !formData.solutions.trim())) {
      alert("Please fill in all mandatory fields in the second section.");
      return;
    } else if (section === 3 && (!formData.sector || formData.marketDescription.trim() === '' || formData.TAM.trim() === '')) {
      alert("Please fill in all mandatory fields in the third section.");
      return;
    } else if (section === 4 && !formData.productOverview.trim()) {
      alert("Please fill in all mandatory fields in the fourth section.");
      return;
    }
  
    // Log the form data along with form ID and user email
    console.log('Form ID:', formId);
    console.log('User Email:', localStorage.getItem('userEmail'));
    console.log('Form Data:', formData);
  
    // If it's the first section, send data to the API
    if (section === 1) {
      const userEmail = localStorage.getItem('userEmail');
      const formResponses = [userEmail];
  
      // Iterate over formData to construct formResponses array
      for (const key in formData) {
        if (Object.hasOwnProperty.call(formData, key)) {
          // Handling file uploads separately
          if (Array.isArray(formData[key])) {
            const files = formData[key];
            const fileNames = files.map(file => file.name);
            formResponses.push(fileNames); // Pushing file names array
          } else {
            formResponses.push(formData[key]);
          }
        }
      }
  
      // Add default values for mobileScreenshots and webScreenshots if they are empty arrays
      if (formResponses[18].length === 0) {
        formResponses[18] = [""]; // Default value for mobileScreenshots
      }
      if (formResponses[19].length === 0) {
        formResponses[19] = [""]; // Default value for webScreenshots
      }
  
      const payload = {
        formId: formId,
        formResponses: formResponses
      };
      console.log('API Payload:', payload); // Log the payload before sending
  
      try {
        const response = await fetch('https://pitchdeck-server.onrender.com/storeresponse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    // Proceed to the next section
    setSection(prevSection => prevSection + 1);
  };
  
  
  
  const handleBack = () => {
    setSection(prevSection => prevSection - 1);
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="center">
          <h1>{section === 1 ? 'About Company' : section === 2 ? 'Problems and Solutions' : section === 3 ? 'Market Size' : 'Product and Services'}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {section === 1 && <AboutCompany formData={formData} handleChange={handleChange} />}
          {section === 2 && <ProblemsAndSolutions formData={formData} handleChange={handleChange} />}
          {section === 3 && <MarketSize formData={formData} handleChange={handleChange} />}
          {section === 4 && <Product formData={formData} handleChange={handleChange} />} {/* Render Product component */}
          {section !== 1 && (
            <button type="button" onClick={handleBack}>Back</button>
          )}
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
