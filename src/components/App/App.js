import User from '../User/User';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class App extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.length > 0 && users.map((user, index) => <User key={user.id} index={index} user={user} />)}
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, null)(App);
