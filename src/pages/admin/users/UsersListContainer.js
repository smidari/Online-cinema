import React from "react";
import { connect } from 'react-redux';
import UsersList from "./UsersList";
import {deleteUser, getUsers} from "../../../redux/actions/users";

class  UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return <UsersList
        thdata={this.props.thdata}
        users={this.props.users}
        deleteUser={this.props.deleteUser}
    />
  }
}

const mapStateToProps = state => ({
  thdata: state.users.thUsesrData,
  users: state.users.users,
});

export default connect(mapStateToProps,
    {deleteUser, getUsers}
    )(UsersListContainer);

