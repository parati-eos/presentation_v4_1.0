import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../css/form.css'

function FormPage() {
  const location = useLocation();
  const valueToPass = localStorage.getItem("userEmail"); // Or from React state
  const jotFormEmbedURL = "https://form.jotform.com/240101689093454"; // Replace with your actual JotForm URL
  const hiddenFieldName = "email"; // Replace with your field's unique name
  const prepopulatedURL = `${jotFormEmbedURL}?${hiddenFieldName}=${encodeURIComponent(
    valueToPass
  )}`;

  const user = location.state && location.state.user;
  useEffect(() => {
    // Function to handle messages from the JotForm iframe
    const handleIFrameMessage = (e) => {
      if (typeof e.data === "object") {
        return;
      }
      // ...

      // Check if the email is available and log it to the console
      if (user && user.email) {
        console.log("User Email:", user.email);
      }
    };

    // Attach event listener for receiving messages
    window.addEventListener("message", handleIFrameMessage, false);

    return () => {
      // Remove event listener when component is unmounted
      window.removeEventListener("message", handleIFrameMessage);
    };
  }, [user]);

  // Construct the form URL with the user's email as a query parameter
  const formUrl = `https://form.jotform.com/240101689093454?email=${
    user && user.email
  }`;
  return (
    <div className="form-container">
      <iframe
        id="JotFormIFrame-240101689093454"
        title="Presentation Deck"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src={prepopulatedURL} // Use the constructed URL
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "700px",
          border: "none",
        }}
        // scrolling="no"
      />
    </div>
  );
}

export default FormPage;
