import React from "react";
import colors from "../../config/colors";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <div
        className="fcontainer col-lg-12"
        style={{ backgroundColor: "#c3d9e9" }}
      >
        <div className="row">
          <div
            className="icons "
            style={{ background: "orange" }}
            data-aos="fade-left"
            data-aos-offset="100"
          >
            <a href="https://www.instagram.com/a_phenomenal1/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div
            className="icons"
            style={{ background: "lightgrey" }}
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <a href="https://github.com/A-phenomenal1">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
          <div
            className="icons"
            style={{ background: "lightgreen" }}
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <a href="https://www.linkedin.com/in/nitesh-kumar-2705bb195/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="fcontent3 col-lg-12"
        style={{ backgroundColor: colors.light3 }}
      >
        <p
          className="content3 col-lg-6"
          style={{ color: colors.dark1 }}
          data-aos="fade-up"
          data-aos-offset="100"
        >
          HI, I am a <strong>Full Stack Web Developer</strong>, Thanks for
          reaching out this website. If you think, this as a worthy work, so
          star it on <strong>Github</strong>. And give a look on my other works
          at <strong>Github</strong> and <strong>Linkedin</strong>.
          <br />
          <span
            className="mail"
            style={{
              color: colors.primary3,
            }}
          >
            Mail: niteshch200053@gmail.com
          </span>
        </p>
      </div>
      <div
        className="fcontent col-lg-12"
        style={{ backgroundColor: colors.primary1, color: colors.light1 }}
      >
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright all Rights are Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
