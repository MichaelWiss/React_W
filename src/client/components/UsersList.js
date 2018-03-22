import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
	componentDidMount() {
		//this.props.fetchUsers();

	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		});
	}

	render() {
		return (
         <div>
            Here's a big list of users:
            <ul>{this.renderdUsers()}</ul>
         </div>
			);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
} 

export default conect(mapStateToProps, { fetchUsers })(UsersList); 