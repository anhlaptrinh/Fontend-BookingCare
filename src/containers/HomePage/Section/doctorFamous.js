import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";

class DotorFamous extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-share section-doctorfamous">
          <div className="section-container">
            <div className="section-header">
              <h3 className="title-section">Bác sĩ nổi bật tuần qua</h3>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize ">
                  <div className="customize-border">
                    <div className="outer-bg">
                      <div className="se-image section-outstanding-doctor"></div>
                    </div>
                    <div className="position text-center">
                      <div>Giáo sư Ánh</div>
                      <div>Cơ xương khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize ">
                  <div className="customize-border">
                    <div className="outer-bg">
                      <div className="se-image section-outstanding-doctor"></div>
                    </div>
                    <div className="position text-center">
                      <div>Giáo sư Ánh</div>
                      <div>Cơ xương khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize ">
                  <div className="customize-border">
                    <div className="outer-bg">
                      <div className="se-image section-outstanding-doctor"></div>
                    </div>
                    <div className="position text-center">
                      <div>Giáo sư Ánh</div>
                      <div>Cơ xương khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize ">
                  <div className="customize-border">
                    <div className="outer-bg">
                      <div className="se-image section-outstanding-doctor"></div>
                    </div>
                    <div className="position text-center">
                      <div>Giáo sư Ánh</div>
                      <div>Cơ xương khớp</div>
                    </div>
                  </div>
                </div>
                <div className="section-customize ">
                  <div className="customize-border">
                    <div className="outer-bg">
                      <div className="se-image section-outstanding-doctor"></div>
                    </div>
                    <div className="position text-center">
                      <div>Giáo sư Ánh</div>
                      <div>Cơ xương khớp</div>
                    </div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DotorFamous);
