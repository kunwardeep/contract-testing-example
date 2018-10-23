import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class User extends Component {
  render() {
    const { user } = this.props;

    return (
      <div >
        <div>
          user: <a href={`user/${user.login}`}>{user.login}</a>
        </div>
      </div>);
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
