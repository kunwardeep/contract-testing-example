import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class User extends Component {
  render() {
    const { user, index } = this.props;

    return (
      <div >
        <div>
          user_{index + 1} <a href={`user/${user.login}`}>{user.login}</a>
        </div>
      </div>);
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default User;
