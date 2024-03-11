import React from "react";
import "./key_feature.css";
import Image1 from "../../Asset/Image1.png";
import Image2 from "../../Asset/Image2.png";
import Image3 from "../../Asset/Image3.png";
import Image4 from "../../Asset/Image4.png";

export default function TopFeature() {
  return (
    <div>
      <div className="container">
        <div className="container-r1">Time is Money</div>
        <div className="container-r2">We Save You Both</div>
        <div className="container-r3">
          AI-Powered investor pitch deck builder
        </div>
        <div className="container-r4">
          Cut hours of pitch deck creation with our streamlined
        </div>
        <div className="container-r5">questionnaire and</div>
        <div className="container-r6">
          <div className="container-r6-c1">
            <div className="container-r6-c1-r1">
              <div className="container-r6-c1-r1-number">
                <div>1</div>
              </div>
              <div className="container-image">
                <img src={Image1}></img>
              </div>
              <div className="container-heading">Fill up the questionnaire</div>
              <div className="container-subheading">
                Answer a few key questions.
              </div>
            </div>
            <div className="container-r6-c1-r2">
              <div className="container-r6-c1-r2-number">
                <div>3</div>
              </div>
              <div className="container-image">
                <img src={Image3}></img>
              </div>
              <div className="container-heading">Tweak and personalise</div>
              <div className="container-subheading">
                Refine the details to perfectly match your story!
              </div>
            </div>
          </div>
          <div className="container-r6-c2">
            <div className="container-r6-c2-r1">
              <div className="container-r6-c2-r1-number">
                <div>2</div>
              </div>
              <div className="container-image">
                <img src={Image2}></img>
              </div>
              <div className="container-heading">AI does the heavy lifting</div>
              <div className="container-subheading">
                Our algorithms craft a custom, branded presentation.
              </div>
            </div>
            <div className="container-r6-c2-r2">
              <div className="container-r6-c2-r2-number">
                <div>4</div>
              </div>
              <div className="container-image">
                <img src={Image4}></img>
              </div>
              <div className="container-heading">Present with confidence</div>
              <div className="container-subheading">
                Deliver a professional pitch that captures investor attention.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
