import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Specialty from "./Section/Specialty";
import MedicalFacility from "./Section/medicalFacility";
import './HomePage.scss'
import DoctorFamous from "./Section/doctorFamous";
import HandBook from "./Section/handBook";
import About from "./Section/About";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
        <div>
            <Header />
            <Specialty settings={settings}/>
            <MedicalFacility settings={settings}/>
            <DoctorFamous settings={settings}/>
            <HandBook settings={settings}/>
            <About/>
            <Footer/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
