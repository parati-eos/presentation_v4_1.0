import React, { useState, useEffect } from 'react';
import './NativeForm.css'; // Assuming you have a CSS file for styling
import AboutCompany from './AboutCom';
import CoverSlide from './Coverslide';
import Problem from './problem';
import Solutions from './solution';
import Market from './MarketSize';
import Product from './product';
import ProductScreen from './productscreen';
import Business from './Business';
import GTM from './GTM';
import Track from './Track';
import Case from './case';
import Testimonials from './Testimonials';
import Competition from './Compititon';
import CompetitiveDiff from './CompetitiveDiff';
import Team from './Team'; // Import the Team component
import Navbar from '../../shared/js/LoginNavbar';
import Contact from './contact'; // Import the Contact component
import Financials from './financials'; // Import the Financials component


const Form = () => {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    tagline: '',
    logo: null,
    primaryColor: '',
    secondaryColor: '',
    establishmentYear: '',
    companyOverview: '',
    problemDescription: '',
    solutionsDescription: '',
    sector: '',
    otherSector: '',
    marketDescription: '',
    TAM: '',
    TAMGrowthRate: '',
    SAM: '',
    SAMGrowthRate: '',
    productOverview: '',
    productRoadmap: '',
    productRoadmapDescription: '',
    technicalArchitecture: '',
    appType: '',
    mobileScreenshots: [],
    webScreenshots: [],
    businessModel: '',
    keyStakeholders: '',
    customerPersona: '',
    goToMarketStrategy: '',
    trackRecord: '',
    caseStudies: '',
    testimonials: [],
    competitors: [],
    competitiveDiff: '',
    teamMembers: [], 
    // Add contact information fields
    websiteLink: '',
    linkedinLink: '',
    contactEmail: '',
    contactPhone: '',
    // Add financial information fields
    financialSnapshot: '',
    plannedRaise: '',
    useOfFunds: '',
    percentage: ''
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
    return 'Parati-' + Date.now();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value === '' ? undefined : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic to check if all mandatory fields are filled
    // Add your validation logic here

    // Log the form data along with form ID and user email
    console.log("Form ID:", formId);
    console.log("User Email:", localStorage.getItem("userEmail"));
    console.log("Form Data:", formData);

    // Construct payload
    const userEmail = localStorage.getItem("userEmail");
    const formResponses = [userEmail];

    // Iterate over formData to construct formResponses array
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        // Handle testimonials and competitors separately to pass null value if they're empty
        if (key === "testimonials" || key === "competitors") {
          formResponses.push(formData[key].length > 0 ? formData[key].map(item => Array.isArray(item) ? item : [item]) : ['']);
        } else if (Array.isArray(formData[key])) {
          const files = formData[key];
          const fileNames = files.map((file) => file.name);
          formResponses.push(fileNames); // Pushing file names array
        } else {
          formResponses.push(formData[key]);
        }
      }
    }

    // Add default values for mobileScreenshots and webScreenshots if they are empty arrays
    if (formResponses[22].length === 0) {
      formResponses[22] = [''];
    }
    if (formResponses[23].length === 0) {
      formResponses[23] = [''];
    }

    // Set default values for indices 29, 30, and 32 if they are null
    if (formResponses[30] === null) {
      formResponses[30] = [''];
    }
    if (formResponses[31] === null) {
      formResponses[31] = [''];
    }
    if (formResponses[32] === null) {
      formResponses[32] = '';
    }
    if (formResponses[33] === null || formResponses[32].length === 0) {
      formResponses[33] = [''];
    }

    const payload = {
      formId: formId,
      formResponses: formResponses,
    };
    console.log("API Payload:", payload); // Log the payload before sending

    try {
      const response = await fetch(
        "https://pitchdeck-server.onrender.com/storeresponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    // Proceed to the next section or show success
// message
if (section < 17) {
  setSection((prevSection) => prevSection + 1);
} else {
  alert("Form submitted successfully!");
  // Reset form data or navigate to another page
}
};

const handleBack = () => {
setSection((prevSection) => prevSection - 1);
};

const getSectionTitle = (section) => {
switch (section) {
  case 1:
    return "About Company";
  case 2:
    return "Company Details";
  case 3:
    return "Problem Description";
  case 4:
    return "Solutions";
  case 5:
    return "Market";
  case 6:
    return "Product";
  case 7:
    return "Product Screen";
  case 8:
    return "Business";
  case 9:
    return "GTM";
  case 10:
    return "Track";
  case 11:
    return "Case";
  case 12:
    return "Testimonials";
  case 13:
    return "Competition";
  case 14:
    return "Competitive Differentiation";
  case 15:
    return "Team";
  case 16:
    return "Financials"; // Update the case for Financials section
  case 17:
    return "Contact"; // Update the case for Contact section
  default:
    return "";
}
};

return (
<div>
  <Navbar />
  <div className="form-container">
    <div className="center">
      <h1>{getSectionTitle(section)}</h1>
    </div>
    <form onSubmit={handleSubmit}>
      {section === 1 && <AboutCompany formData={formData} handleChange={handleChange} />}
      {section === 2 && <CoverSlide formData={formData} handleChange={handleChange} />}
      {section === 3 && <Problem formData={formData} handleChange={handleChange} />}
      {section === 4 && <Solutions formData={formData} handleChange={handleChange} />}
      {section === 5 && <Market formData={formData} handleChange={handleChange} />}
      {section === 6 && <Product formData={formData} handleChange={handleChange} />}
      {section === 7 && <ProductScreen formData={formData} handleChange={handleChange} />}
      {section === 8 && <Business formData={formData} handleChange={handleChange} />}
      {section === 9 && <GTM formData={formData} handleChange={handleChange} />}
      {section === 10 && <Track formData={formData} handleChange={handleChange} />}
      {section === 11 && <Case formData={formData} handleChange={handleChange} />}
      {section === 12 && <Testimonials formData={formData} handleChange={handleChange} />}
      {section === 13 && <Competition formData={formData} handleChange={handleChange} />}
      {section === 14 && <CompetitiveDiff formData={formData} handleChange={handleChange} />}
      {section === 15 && <Team formData={formData} handleChange={handleChange} />}
      {section === 16 && <Financials formData={formData} handleChange={handleChange} />} {/* Render the Financials component */}
      {section === 17 && <Contact formData={formData} handleChange={handleChange} />} {/* Render the Contact component */}
      {section !== 1 && <button type="button" onClick={handleBack}>Back</button>}
      <button type="submit">{section !== 17 ? "Next" : "Submit"}</button>
    </form>
  </div>
</div>
);
};

export default Form;
