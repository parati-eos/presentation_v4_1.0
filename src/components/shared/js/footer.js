import React from 'react';
import '../css/footer.css';

const Footer = () => {
    return (
        <div className="footer_section">
            {/* FOOTER TOP SECTION START */}
            <div className="subscriber_head">
                <h1 id="free_daily_updates">Free Daily Updates</h1>
                <form action="" className="subscriber_search_box" method="get">
                    <input className="subscriber_search_bar" type="text" placeholder="Search for datasets, APIs, " />
                    <button className="subscriber_button" type="submit">Subscribe</button>
                </form>
            </div>
            {/* FOOTER TOP SECTION ENDS */}

            {/* FOOTER MID SECTION START */}
            <div className="subscriber_mid">
                <div className="first_para">
                    <div className="footer_logo"><h1>LOGO</h1></div>
                    <div className="footer_para">
                        <h3 id="footer_first_head">Start Your Journey Now</h3>
                        <br />
                        <h5>Michael-Miller99@gmail.com</h5>
                        <h5>www.Devlop-Security.com</h5>
                    </div>
                </div>
                <div className="middle_para">
                    <div className="footer_About">
                        <h4 className="footer_About_para"><a className="footer_About_head" href="#">About</a></h4>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>
                    {/* Other footer_About sections */}
                </div>
                {/* Other sections */}
            </div>
            {/* FOOTER MID SECTION ENDS */}

            {/* FOOTER LAST SECTION START */}
            <div className="subscriber_last">
                <div className="footer_logo_last"><h1>LOGO</h1></div>
                <div className="footer_last_mid_para"><p id="unleash">Unleash The Power Of Security And Development</p></div>
                <div className="footer_last_last_para">
                    <p className="copyright2">COPYRIGHT 2022 &copy; All right reserved</p>
                    <p className="copyright2">ALL Trademarks are registered to their respective owners bros</p>
                </div>
            </div>
            {/* FOOTER LAST SECTION ENDS */}
        </div>
    );
};

export default Footer;
