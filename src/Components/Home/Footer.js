import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="mt-5"
      style={{ display: "block", padding: "3em 0 0 0" }}
    >
      <div className="fcontainer" style={{ border: "1px solid black" }}>
        <div className="row">
          <div className="icons" style={{ background: "orange" }}>
            <a href="gmail">
              <i class="fa fa-google" aria-hidden="true"></i>
            </a>
          </div>
          <div className="icons" style={{ background: "lightblue" }}>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className="icons" style={{ background: "lightgrey" }}>
            <a href="https://github.com/A-phenomenal1">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
          <div className="icons" style={{ background: "lightgreen" }}>
            <a href="www.linkedin.com/in/nitesh-kumar-2705bb195">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="fcontent">
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright all Rights are Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
