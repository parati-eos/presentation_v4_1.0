import React, { useState, useEffect } from "react";
import "./NativeForm.css"; // Assuming you have a CSS file for styling
import AboutCompany from "./AboutCom";
import CoverSlide from "./Coverslide";
import Problem from "./problem";
import Solutions from "./solution";
import Market from "./MarketSize";
import Product from "./product";
import ProductScreen from "./productscreen";
import Business from "./Business";
import GTM from "./GTM";
import Track from "./Track";
import Case from "./case";
import Testimonials from "./Testimonials";
import Competition from "./Competition";
import CompetitiveDiff from "./CompetitiveDiff";
import Team from "./Team"; // Import the Team component
import Navbar from "../../shared/js/LoginNavbar";
import Contact from "./contact"; // Import the Contact component
import Financials from "./financials"; // Import the Financials component

const Form = () => {
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    tagline: "",
    logo: null,
    primaryColor: "",
    secondaryColor: "",
    establishmentYear: "",
    companyOverview: "",
    problemDescription: "",
    solutionsDescription: "",
    sector: "",
    otherSector: "",
    marketDescription: "",
    TAM: "",
    TAMGrowthRate: "",
    SAM: "",
    SAMGrowthRate: "",
    productOverview: "",
    productRoadmap: "",
    productRoadmapDescription: "",
    technicalArchitecture: "",
    appType: "",
    mobileScreenshots: [],
    webScreenshots: [],
    businessModel: "",
    keyStakeholders: "",
    customerPersona: "",
    goToMarketStrategy: "",
    trackRecord: [],
    caseStudies: "",
    testimonials: [],
    competitors: [],
    competitiveDiff: "",
    teamMembers: [],
    // Add contact information fields
    websiteLink: "",
    linkedinLink: "",
    contactEmail: "",
    contactPhone: "",
    // Add financial information fields
    financialSnapshot: "",
    revenueCost: [],
    plannedRaise: "",
    useOfFunds: [],
    percentage: "",
  });
  const [progress, setProgress] = useState(0);

  const [formId, setFormId] = useState("");

  useEffect(() => {
    // Generate a unique form ID when the component mounts for the first time
    const newFormId = generateFormId();
    setFormId(newFormId);
    console.log("Form ID:", newFormId);
    // Fetch user email from local storage
    const userEmail = localStorage.getItem("userEmail");
    console.log("User Email:", userEmail);
  }, []); // Empty dependency array to run this effect only once
  const [showHiddenButton, setShowHiddenButton] = useState(false); // State to control button visibility

  const handleHiddenButtonClick = async () => {
    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbwHxRZ-BojygDnHhho3JOXn6Pxj63YZhl6yCMopGyVgVGlIvi6_vWoaCSlbk9eESunk/exec?userID=${localStorage.getItem(
          "userEmail"
        )}&submissionID=${formId}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.text();
      console.log("API Response:", responseData); // Log the entire response

      // Attempt to parse response data as JSON
      const data = JSON.parse(responseData);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleHiddenButtonClick(); // Call the function after 3 seconds
      setShowHiddenButton(false); // Optionally set showHiddenButton to true if you want to display the button
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const generateFormId = () => {
    // Generate a random unique ID using timestamp and random numbers
    return "Parati-" + Date.now();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log([name, value]);
    console.log(e.target);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === "" ? undefined : value,
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

    const payload = {
      formId: formId,
      formResponses: formData,
    };
    console.log("API Payload:", payload); // Log the payload before sending

    try {
      const response = await fetch(
        "https://pitchdeck-server.onrender.com/submission",
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
    if (section === 1) {
      if (progress < 6) {
        setProgress(6);
      }
    } else if (section === 2) {
      if (progress < 12) {
        setProgress(12);
      }
    } else if (section === 3) {
      if (progress < 18) {
        setProgress(18);
      }
    } else if (section === 4) {
      if (progress < 24) {
        setProgress(24);
      }
    } else if (section === 5) {
      if (progress < 30) {
        setProgress(30);
      }
    } else if (section === 6) {
      if (progress < 36) {
        setProgress(36);
      }
    } else if (section === 7) {
      if (progress < 42) {
        setProgress(42);
      }
    } else if (section === 8) {
      if (progress < 48) {
        setProgress(48);
      }
    } else if (section === 9) {
      if (progress < 54) {
        setProgress(54);
      }
    } else if (section === 10) {
      if (progress < 60) {
        setProgress(60);
      }
    } else if (section === 11) {
      if (progress < 66) {
        setProgress(66);
      }
    } else if (section === 12) {
      if (progress < 72) {
        setProgress(72);
      }
    } else if (section === 13) {
      if (progress < 78) {
        setProgress(78);
      }
    } else if (section === 14) {
      if (progress < 84) {
        setProgress(84);
      }
    } else if (section === 15) {
      if (progress < 90) {
        setProgress(90);
      }
    } else if (section === 16) {
      if (progress < 96) {
        setProgress(96);
      }
    } else if (section === 17) {
      if (progress < 100) {
        setProgress(100);
      }
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
        return "Product Screenshots";
      case 8:
        return "Business Model";
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
    <div className="native-form">
      <Navbar />
      <div className="form-container">
        <div className="form-details">
          <div className="section-name">
            <h1>{getSectionTitle(section)}</h1>
          </div>
          <div className="progress-bar">
            <div
              style={{
                height: "5px",
                width: "100%",
                backgroundColor: "#004264",
                borderRadius: "50px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: "#e6a500",
                  borderRadius: "inherit",
                  transition: "width .2s ease-in",
                }}
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-area">
              {section === 1 && (
                <AboutCompany formData={formData} handleChange={handleChange} />
              )}
              {section === 2 && (
                <CoverSlide formData={formData} handleChange={handleChange} />
              )}
              {section === 3 && (
                <Problem formData={formData} handleChange={handleChange} />
              )}
              {section === 4 && (
                <Solutions formData={formData} handleChange={handleChange} />
              )}
              {section === 5 && (
                <Market formData={formData} handleChange={handleChange} />
              )}
              {section === 6 && (
                <Product formData={formData} handleChange={handleChange} />
              )}
              {section === 7 && (
                <ProductScreen
                  formData={formData}
                  handleChange={handleChange}
                />
              )}
              {section === 8 && (
                <Business formData={formData} handleChange={handleChange} />
              )}
              {section === 9 && (
                <GTM formData={formData} handleChange={handleChange} />
              )}
              {section === 10 && (
                <Track
                  formData={formData}
                  handleChange={handleChange}
                  setFormData={setFormData} // Pass setFormData here
                />
              )}
              {section === 11 && (
                <Case formData={formData} handleChange={handleChange} />
              )}
              {section === 12 && (
                <Testimonials formData={formData} handleChange={handleChange} />
              )}
              {section === 13 && (
                <Competition formData={formData} handleChange={handleChange} />
              )}
              {section === 14 && (
                <CompetitiveDiff
                  formData={formData}
                  handleChange={handleChange}
                />
              )}
              {section === 15 && (
                <Team formData={formData} handleChange={handleChange} />
              )}
              {section === 16 && (
                <Financials formData={formData} handleChange={handleChange} />
              )}{" "}
              {/* Render the Financials component */}
              {section === 17 && (
                <Contact formData={formData} handleChange={handleChange} />
              )}{" "}
            </div>
            {/* Render the Contact component */}
            <div className="form-buttons">
              <div className="form-back-button">
                {section !== 1 && (
                  <button type="button" onClick={handleBack}>
                    Back
                  </button>
                )}
              </div>
              <div className="form-next-button">
                <button type="submit">
                  {section !== 17 ? "Next" : "Submit"}
                </button>
              </div>
            </div>
          </form>
          {showHiddenButton && <button onClick={handleHiddenButtonClick}>Hidden Button</button>}
        </div>
      </div>
    </div>
  );
};

export default Form;
