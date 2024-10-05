import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";

class MedicalFacility extends Component {
  render() {
    
    return (
      <React.Fragment>
        <div className="section-share section-medicalfacility">
          <div className="section-container">
            <div className="section-header">
              <h3 className="title-section">Cơ sở y tế nổi bật</h3>
              <button className="btn-section">Tìm kiếm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize">
                  <div className="se-image section-medicalfacility">
                    
                  </div>
                  <h5>Cơ xương khớp</h5>
                </div>
                <div className="section-customize">
                  <div className="se-image section-medicalfacility">
                    
                  </div>
                  <h5>Cơ xương khớp</h5>
                </div>
                <div className="section-customize">
                  <div className="se-image section-medicalfacility">
                    
                  </div>
                  <h5>Cơ xương khớp</h5>
                </div>
                <div className="section-customize">
                  <div className="se-image section-medicalfacility">
                    
                  </div>
                  <h5>Cơ xương khớp</h5>
                </div>
                <div className="section-customize">
                  <div className="se-image section-medicalfacility">
                    
                  </div>
                  <h5>Cơ xương khớp</h5>
                </div>
                <div className="section-customize">
                  <div className="se-image section-medicalfacility">
                    
                  </div>
                  <h5>Cơ xương khớp</h5>
                </div>
              </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
