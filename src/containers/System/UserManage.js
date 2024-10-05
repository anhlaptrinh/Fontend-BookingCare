import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUser } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal:false,
      isUpdate: false,
      userUpdate: {}
    };
  }

  async componentDidMount() {
    let response = await getAllUser("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
        
      });
    }
  }
  handleAddnewUser=()=>{
    this.setState({
      isOpenModal: true,
      isUpdate: false
    })
    
  }
  handleEditUser=(dataUser)=>{
    this.setState({
      isOpenModal: true,
      isUpdate: true,
      userUpdate:dataUser
    })
    
  }
  toggleUserModal=()=>{
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })
  }

  render() {
    return (
      <div className="users-container">
        <ModalUser data={this.state.userUpdate} isOpen={this.state.isOpenModal} isEdit={this.state.isUpdate} toggleUserModal={this.toggleUserModal}/>
        <div className="title text-center">Manage users with Anhdev</div>
        <div className="mx-1">
          <button className="btn btn-primary px-3" onClick={()=>this.handleAddnewUser()}><i className="fas fa-plus"></i>Add new users</button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th className="text-center">Action</th>
            </tr>
            {this.state.arrUsers &&
              this.state.arrUsers.map((user) => {
                return (
                  <tr>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td className="text-center">
                      <button onClick={()=>{this.handleEditUser(user)}} className="btn-edit">
                      <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
