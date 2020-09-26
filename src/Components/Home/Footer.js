import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="mt-5" style={{ display: "block", padding: "3em 0 0 0" }}>
      <div
        className="fcontainer col-lg-12 mt-5"
        style={{ border: "1px solid black" }}
      >
        <div className="row">
          <div className="icons" style={{ background: "orange" }}>
            <a href="https://www.instagram.com/a_phenomenal1/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className="icons" style={{ background: "lightgrey" }}>
            <a href="https://github.com/A-phenomenal1">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
          <div className="icons" style={{ background: "lightgreen" }}>
            <a href="https://www.linkedin.com/in/nitesh-kumar-2705bb195/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="fcontent3 col-lg-12">
        <p className="content3 col-lg-6">
          Hello Friends, first of all thanks you to get to reach it out this
          website. If you think, this is worthy for you so, star it on
          <strong> Github</strong>. And there are some things that i wanted to implement, but i can't, so try to think over
          it. You can get to know about it in<strong> "Read.me" </strong>.
          <br />{" "}
          <span
            style={{
              display: 'block',
              fontFamily: "fantasy",
              fontWeight: "bolder",
              color: "greenyellow",
              fontSize: '1.2em',
            }}
          >
            Mail: niteshch200053@gmail.com
          </span>
        </p>
      </div>
      <div className="fcontent col-lg-12">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright all Rights are Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
