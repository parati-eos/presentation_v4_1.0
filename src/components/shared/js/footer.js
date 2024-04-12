import React from "react";
import "../css/footer.css";
import ParatiLogo from "../../Asset/parati-logo.png";
import medium from "../../Asset/medium.webp";
import instagram from "../../Asset/instagram.webp";
import twitter from "../../Asset/twitter.webp";
import linkedin from "../../Asset/linkedin.webp";

const Footer = () => {
  return (
    <div className="footer_section">
      {/* FOOTER TOP SECTION START */}
      <div className="subscriber_head">
        <div id="free_daily_updates" className="free_daily_updates">
          <label>Subscribe to our blog!</label>
        </div>
        <div className="subscriber_form">
          <form action="" className="subscriber_search_box" method="get">
            <input className="subscriber_search_bar" type="text" />
            <button className="subscriber_button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* FOOTER TOP SECTION ENDS */}

      {/* FOOTER MID SECTION START */}
      <div className="subscriber_mid">
        <div className="first_para">
          <div className="first_para_logo">
            <img src={ParatiLogo} />
          </div>
          <div className="first_para_details">
            <a href="https://www.parati.in/contact">Contact Us</a>
            <a href="https://parati-in.medium.com">Blog</a>
          </div>
        </div>
        <div className="middle_para">
          <div className="middle_para_details">
            <a href="https://www.parati.in/our-work">Our Work</a>
            <a href="https://www.parati.in/managed-operations-framework">
              Our Frame
            </a>
            <a href="https://www.parati.in/capabilities">Our Services</a>
          </div>
          {/* Other footer_About sections */}
        </div>
        <div className="last_para">
          <div className="last_para_title">Social Media</div>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/parati.in">
              <img src={instagram} />
            </a>
            <a href="https://twitter.com/parativentures">
              <img src={twitter} />
            </a>
            <a href="https://www.linkedin.com/company/parati-in">
              <img src={linkedin} />
            </a>
            <a href="https://parati-in.medium.com">
              <img src={medium} />
            </a>
          </div>
          {/* Other footer_About sections */}
        </div>
        {/* Other sections */}
      </div>
      {/* FOOTER MID SECTION ENDS */}

      {/* FOOTER LAST SECTION START */}
      <div className="subscriber_last">
        <div className="copyright">@copyrightparati.com</div>
      </div>
      {/* FOOTER LAST SECTION ENDS */}
    </div>
  );
};

export default Footer;
