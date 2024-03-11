import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/presentationcheck.css";
import "../css/HistoryOverlay.css";
import presentationImg from "../../Asset/background.jpg";
import shareIcon from "../../Asset/share.png";
import downloadIcon from "../../Asset/download.png";
import Googleslides from "../../helper/googlepresentation-helper.js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { v4 as uuidv4 } from 'uuid';
import ApplicationNavbar from "../../shared/js/ApplicationNavbar.js";

const stripePromise = loadStripe(
  "pk_live_51Nt6L4SFXGfQaQUe1TDnsP2bdInw6a942gnEtyCxsbrOjKMTjM35DvvSrIKeuJF9wgzn8zw5gtmPscP7HI2sU1dR00dpsHYtmV"
); // Replace with your test public key

const GooglePresentation = ({ url }) => {
  return (
    <div className="PresentationContainer">
      <div>
        <Googleslides />
      </div>
    </div>
  );
};

const PresentationCheck = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false);
  const historyTimeout = useRef(null); // Ref for the timeout

  const handleMouseEnterHistory = () => {
    clearTimeout(historyTimeout.current); // Clear any existing timeout
    setShowHistory(true);
  };

  const handleMouseLeaveHistory = () => {
    // Set a timeout to hide the history div after a delay
    historyTimeout.current = setTimeout(() => {
      setShowHistory(false);
    }, 200); // Adjust the delay as needed
  };

  const handleMouseEnterDiv = () => {
    clearTimeout(historyTimeout.current); // Clear any existing timeout
    console.log("Enter the div");
  };

  const handleMouseLeaveDiv = () => {
    setShowHistory(false);
    console.log("Left the div");
  };

  const handleBuildPresentation = () => {
    // Redirect to the 'form.js' page upon clicking "Build Presentation"
    navigate("/form");
  };

  const applicationId = uuidv4(); // Dynamically generate applicationId using uuid
  const presentationUrl =
    "https://docs.google.com/presentation/d/1enbGTOYKtwHDQ5R2Z3BMYPnXq0xdiOk8DL_hjKcpfOo/edit#slide=id.SLIDES_API1193561537_0"; // Replace with your actual presentation embed URL

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleDownload = async () => {
    // Open the Stripe payment modal when the user clicks the "Download Presentation" button
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccess = () => {
    // Handle the presentation download after a successful payment
    const link = document.createElement("a");
    link.href = presentationUrl;
    link.setAttribute("download", "presentation.pptx"); // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the payment modal
    setIsPaymentModalOpen(false);
  };

  const handleShare = () => {
    const currentURL = window.location.href;

    // Create a shareable link with the current URL and include the presentation URL
    const uniqueShareableUrl = `${currentURL}/share/${applicationId}/presentation?url=${encodeURIComponent(
      presentationUrl
    )}`;

    // Use the navigate function to share the link
    navigate(`/share/${applicationId}/presentation?url=${encodeURIComponent(presentationUrl)}`);

    if (navigator.share) {
      navigator
        .share({
          title: "Share Presentation",
          text: "Check out this presentation",
          url: uniqueShareableUrl,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Share failed: ", error));
    } else {
      alert(
        "Sharing is not supported on this device/browser. Copy the link below and share it manually:\n\n" +
          uniqueShareableUrl
      );
    }
  };

  return (
    <div className="main-container">
      <ApplicationNavbar
        userpicture="https://media.licdn.com/dms/image/D4E03AQF9OIoA21TMgw/profile-displayphoto-shrink_800_800/0/1678095291696?e=2147483647&v=beta&t=Qm1QQSeBYNehm5t63Q1EhRpZbrfpiR35HPzAC78lRRs"
        historyShow={handleMouseEnterHistory}
        historyHide={handleMouseLeaveHistory}
      />
      {showHistory && (
        <div className="history-preview-overlay">
          <div
            className="history-preview-bar"
            onMouseEnter={handleMouseEnterDiv}
            onMouseLeave={handleMouseLeaveDiv} // Close history on mouse leave
          >
            <div className="history-preview">
              <div className="presentation-history">
                <img src={presentationImg} alt="Presentation 1" />
                <p>Presentation 1</p>
              </div>
              {/* Add more presentation history items as needed */}
            </div>
            <div className="see-more-container">
              <a>See More ...</a>
            </div>
          </div>
        </div>
      )}
      <div className="presentation-viewing-container">
        <div className="presentation-viewing-center">
          <div className="presentation-view-slides">
            <GooglePresentation />
          </div>
          <div className="export-bttn">
            {/* Button to initiate the share */}
            <button className="button-with-icon" onClick={handleShare}>
              <span className="icon share-icon" />
              Share
            </button>

            {/* Button to initiate the download */}
            <button className="button-with-icon" onClick={handleDownload}>
              <span className="icon download-icon" />
              Export
            </button>
          </div>
        </div>

        <Elements stripe={stripePromise}>
          {isPaymentModalOpen && (
            <PaymentModal onSuccess={handlePaymentSuccess} />
          )}
        </Elements>
      </div>
    </div>
  );
};

const PaymentModal = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    // Handle the payment using Stripe's APIs
    const result = await stripe.confirmCardPayment(
      "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",
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (result.error) {
      console.error(result.error);
    } else {
      // Payment succeeded
      onSuccess();
    }
  };

  return (
    <div className="payment-modal">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay and Download
        </button>
      </form>
    </div>
  );
};

export default PresentationCheck;
