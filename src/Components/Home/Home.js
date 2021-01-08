import React, { Component } from "react";

import "./Home.css";
import Card from "./Home2";
import Footer from "./Footer";
import colors from "../../config/colors";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section col-xs-12">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-xl-12 ">
                  <div className="p-5 bg-transparent">
                    <h2
                      className="heading"
                      style={{ color: colors.primary3 }}
                      data-aos="zoom-in"
                    >
                      Clock Menu Application
                    </h2>
                    <div
                      className="carousel slide"
                      id="carouselExampleIndicators"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators mb-0">
                        <li
                          className="active"
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        ></li>
                      </ol>
                      <div className="carousel-inner px-md-5 pb-md-4 pt-md-2">
                        <div className="carousel-item active">
                          <div className="media">
                            <div className="media-body ml-3">
                              <blockquote
                                className="blockquote border-2 p-0"
                                style={{
                                  textAlign: "center",
                                  backgroundColor: "transparent",
                                }}
                              >
                                <p
                                  className=" para"
                                  style={{
                                    color: colors.secondary2,
                                  }}
                                >
                                  <i
                                    className="fa fa-quote-left mr-md-3"
                                    style={{ color: "#3CE02F" }}
                                  ></i>
                                  But believe me, my dear boy, there is nothing
                                  stronger than those two: patience and time.
                                </p>
                                <footer
                                  className="blockquote-footer quote-teller"
                                  style={{
                                    color: colors.dark1,
                                  }}
                                >
                                  The greatest humanist,
                                  <cite title="Quote teller"> Leo Tolstoy</cite>
                                </footer>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="media">
                            <div className="media-body ml-3 ">
                              <blockquote
                                className="blockquote border-0 p-0"
                                style={{ textAlign: "center" }}
                              >
                                <p
                                  className="para"
                                  style={{
                                    color: colors.secondary2,
                                  }}
                                >
                                  <i
                                    className="fa fa-quote-left mr-3"
                                    style={{ color: "#3CE02F" }}
                                  ></i>
                                  It is the time you have wasted for your rose
                                  that makes your rose so important
                                </p>
                                <footer
                                  className="blockquote-footer quote-teller"
                                  style={{
                                    color: colors.dark1,
                                  }}
                                >
                                  The Little Prince,
                                  <cite title="Quote Teller">
                                    Antoine de Saint-Exupéry
                                  </cite>
                                </footer>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="media">
                            <div className="media-body ml-3">
                              <blockquote
                                className="blockquote border-0 p-0"
                                style={{
                                  textAlign: "center",
                                }}
                              >
                                <p
                                  className="para"
                                  style={{
                                    color: colors.secondary2,
                                  }}
                                >
                                  <i
                                    className="fa fa-quote-left mr-3"
                                    style={{
                                      color: "#3CE02F",
                                    }}
                                  ></i>
                                  Better spend time waiting for the opportunity
                                  to take an action than miss the chance
                                </p>
                                <footer
                                  className="blockquote-footer quote-teller"
                                  style={{
                                    color: colors.dark1,
                                  }}
                                >
                                  The Merry Wives Of Wonder,
                                  <cite title="Quote Teller">
                                    William Shakespeare
                                  </cite>
                                </footer>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="sign"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1200"
              style={{ color: "#2c061f" }}
            >
              <strong>Developer: </strong>
              <i>
                <span> Nitesh Kumar </span>
              </i>
            </h3>
          </div>
        </div>
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Home;
