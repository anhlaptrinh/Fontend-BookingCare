import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./About.scss";

import listimg from '../../../assets/Capture.png'

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-about">
          <div className="about-container">
            <div className="section-header">
              <h3 className="title-section">Truyền thông nói về BookingCares</h3>
            </div>
            <div className="about-body">
              <div className="about-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FyDQljKtWnI?si=hjiFLghjzH9ejYlq"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="about-list">
                <img src={listimg} alt="img"/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
