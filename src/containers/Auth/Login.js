/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginPage } from "../../services/userService";

// import adminService from '../services/adminService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }
  handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  handleLogin = async () => {
    this.setState({ errMessage: "" });
    try {
      let data=await handleLoginPage(this.state.username, this.state.password);
      if(data && data.errCode!==0){
        
        this.setState({
          errMessage: data.message,
        })
      }
      if(data && data.errCode===0){
        this.props.userLoginSuccess(data.user)
        
      }
    } catch (error) {
      console.log("error: ", error.response);
      if (error.response) {
        if (error.response.data) {
          this.setState({ errMessage: error.response.data.message });
        }
      }
    }
    
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center text-login">Login</div>
            <div className="col-12 form group login-input">
              <label>Username</label>
              <input
                placeholder="Enter your username"
                type="text"
                name="username"
                className="form-control"
                onChange={(event) => {
                  this.handleOnChangeInput(event);
                }}
              />
            </div>
            <div className="col-12 form group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  onChange={(event) => {
                    this.handleOnChangeInput(event);
                  }}
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  type={this.state.isShowPassword ? "text" : "password"}
                />
                <span
                  onClick={() => {
                    this.handleShowPassword()
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <span className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </span>
            <div className="col-12">
              <button
               
                className="btn-login"
                onClick={() => {
                  this.handleLogin()
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12 forgot-password">
              <span>Forgot your password?</span>
            </div>
            <div className="col-12 text-center text-other-login mt-3">
              Or login with:
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfor)=>dispatch(actions.userLoginSuccess(userInfor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
