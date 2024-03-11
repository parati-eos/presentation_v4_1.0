import React, { useEffect } from "react";
import "./feature.css"; // Import your CSS file containing animation styles
import FeatureImage1 from "../../Asset/Featureimg1.png";
import FeatureImage2 from "../../Asset/Featureimg2.png";
import FeatureImage3 from "../../Asset/Featureimg3.png";
import FeatureImage4 from "../../Asset/Featureimg4.png";
import F1I1 from "../../Asset/F1I1.png";
import F1I2 from "../../Asset/F1I2.png";
import F1I3 from "../../Asset/F1I3.png";
import F2I1 from "../../Asset/F2I1.png";
import F2I2 from "../../Asset/F2I2.png";
import F2I3 from "../../Asset/F2I3.png";
import F3I1 from "../../Asset/F3I1.png";
import F3I2 from "../../Asset/F3I2.png";
import F4I1 from "../../Asset/F4I1.png";
import F4I2 from "../../Asset/F4I2.png";

export default function Feature() {
  useEffect(() => {
    const observerT1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("image-animation-right-to-left");
        }
      });
    });

    const observerT2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("image-animation-left-to-right");
        }
      });
    });

    const imagesT1 = document.querySelectorAll(".animate-on-scroll-t1"); // Select all images you want to animate in key-feature-t1-image
    imagesT1.forEach((image) => {
      observerT1.observe(image);
    });

    const imagesT2 = document.querySelectorAll(".animate-on-scroll-t2"); // Select all images you want to animate in key-feature-t2-image
    imagesT2.forEach((image) => {
      observerT2.observe(image);
    });

    // Clean up the observers when component unmounts
    return () => {
      observerT1.disconnect();
      observerT2.disconnect();
    };
  }, []);

  return (
    <div className="key-features-container">
      <div className="key-features-heading">Key Features</div>
      <div className="key-feature-t1">
        <div className="key-feature-t1-text">
          <div className="key-feature-t1-heading">
            Pitch perfection in a flash
          </div>
          <div className="key-feature-t1-points">
            <div className="key-feature-t1-point">
              <div className="key-feature-t1-point-icon">
                <img src={F1I1} alt="icon"></img>
              </div>
              <div className="key-feature-t1-point-inside">
                Guided questionnaire to cover the essentials.
              </div>
            </div>
            <div className="key-feature-t1-point">
              <div className="key-feature-t1-point-icon">
                <img src={F1I2} alt="icon"></img>
              </div>
              <div className="key-feature-t1-point-inside">
                Personalised presentation ready at click of a button.
              </div>
            </div>
            <div className="key-feature-t1-point">
              <div className="key-feature-t1-point-icon">
                <img src={F1I3} alt="icon"></img>
              </div>
              <div className="key-feature-t1-point-inside">
                Transform your vision into a compelling pitch within minutes.
              </div>
            </div>
          </div>
        </div>
        <div className="key-feature-t1-image">
          <img
            src={FeatureImage1}
            alt="feature"
            className="animate-on-scroll-t1"
          ></img>
        </div>
      </div>
      <div className="key-feature-t2">
        <div className="key-feature-t2-text">
          <div className="key-feature-t2-heading">
            Budget Bliss, Time Thrift
          </div>
          <div className="key-feature-t2-points">
            <div className="key-feature-t2-point">
              <div className="key-feature-t2-point-icon">
                <img src={F2I1} alt="icon"></img>
              </div>
              <div className="key-feature-t2-point-inside">
                Close deals faster with professional-grade presentations.
              </div>
            </div>
            <div className="key-feature-t2-point">
              <div className="key-feature-t2-point-icon">
                <img src={F2I2} alt="icon"></img>
              </div>
              <div className="key-feature-t2-point-inside">
                Turn your vision into an investment magnet with our AI-powered
                platform.
              </div>
            </div>
            <div className="key-feature-t2-point">
              <div className="key-feature-t2-point-icon">
                <img src={F2I3} alt="icon"></img>
              </div>
              <div className="key-feature-t2-point-inside">
                Accelerate your success trajectory with impactful pitches.
              </div>
            </div>
          </div>
        </div>
        <div className="key-feature-t2-image">
          <img
            src={FeatureImage2}
            alt="feature"
            className="animate-on-scroll-t2"
          ></img>
        </div>
      </div>
      <div className="key-feature-t1">
        <div className="key-feature-t1-text">
          <div className="key-feature-t1-heading">
            Budget Bliss, Time Thrift
          </div>
          <div className="key-feature-t1-points">
            <div className="key-feature-t1-point">
              <div className="key-feature-t1-point-icon">
                <img src={F1I1} alt="icon"></img>
              </div>
              <div className="key-feature-t1-point-inside">
                Guided questionnaire to cover the essentials.
              </div>
            </div>
            <div className="key-feature-t1-point">
              <div className="key-feature-t1-point-icon">
                <img src={F1I2} alt="icon"></img>
              </div>
              <div className="key-feature-t1-point-inside">
                Aligns with proven frameworks that resonate with investors.
              </div>
            </div>
          </div>
        </div>
        <div className="key-feature-t1-image">
          <img
            src={FeatureImage1}
            alt="feature"
            className="animate-on-scroll-t1"
          ></img>
        </div>
      </div>
      <div className="key-feature-t2">
        <div className="key-feature-t2-text">
          <div className="key-feature-t2-heading">
            Business Brilliance, No distractions
          </div>
          <div className="key-feature-t2-points">
            <div className="key-feature-t2-point">
              <div className="key-feature-t2-point-icon">
                <img src={F1I1} alt="icon"></img>
              </div>
              <div className="key-feature-t2-point-inside">
                Ditch the design drag, accelerate your operational edge.
              </div>
            </div>
            <div className="key-feature-t2-point">
              <div className="key-feature-t2-point-icon">
                <img src={F1I2} alt="icon"></img>
              </div>
              <div className="key-feature-t2-point-inside">
                Sharpen your focus, let us polish your pitch.
              </div>
            </div>
          </div>
        </div>
        <div className="key-feature-t2-image">
          <img
            src={FeatureImage2}
            alt="feature"
            className="animate-on-scroll-t2"
          ></img>
        </div>
      </div>
    </div>
  );
}
