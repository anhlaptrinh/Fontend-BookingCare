import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: ''
    };
  }

  toggle = () => {
    this.props.toggleUserModal();
  };
  handleOnChangeInput=(event)=>{
    const {name,value}=event.target;
    this.setState({
      [name]: value
    })
  }
  checkValidInput=()=>{}
  handleAddnewUser=()=>{

  }

  render() {
    const {firstName,lastName,email,address,password}=this.state
    return (
      <Modal
        className="modal-user-container"
        isOpen={this.props.isOpen}
        toggle={this.toggle}
        size="lg"
        centered
      >
        <ModalHeader toggle={this.toggle}>{this.props.isEdit?"Edit User":"Create a new user"}</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input value={email} name="email" onChange={(event)=>{this.handleOnChangeInput(event)}} defaultValue={this.props.isEdit?this.props.data.email:""} type="text" />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input value={password} name="password" onChange={(event)=>{this.handleOnChangeInput(event)}} defaultValue={this.props.isEdit?"12345678":""} disabled={this.props.isEdit} type="password" />
            </div>
            <div className="input-container">
              <label>First Name</label>
              <input value={firstName} name="firstName" onChange={(event)=>{this.handleOnChangeInput(event)}} defaultValue={this.props.isEdit?this.props.data.firstName:""} type="text" />
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input value={lastName} name="lastName" onChange={(event)=>{this.handleOnChangeInput(event)}} defaultValue={this.props.isEdit?this.props.data.lastName:""} type="text" />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input value={address} name="address" onChange={(event)=>{this.handleOnChangeInput(event)}} defaultValue={this.props.isEdit?this.props.data.address:""} type="text" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.props.isEdit?this.toggle:this.handleAddnewUser} className="px-3" color="primary" >
            {this.props.isEdit?"Update User":"Add User"}
          </Button>{" "}
          <Button className="px-3" color="secondary" onClick={this.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
