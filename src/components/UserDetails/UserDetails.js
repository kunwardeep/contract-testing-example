import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

class UserDetails extends Component {
  componentDidMount() {
    const userlogin = this.props.match.params.userlogin || ''
    console.log(userlogin)
  };
  render() {
    // const { user } = null;

    return (
      <div >
        x

      </div>);
  }
}

// UserDetails.propTypes = {
//   user: PropTypes.object.isRequired
// };

export default UserDetails;

// const User = ({ match }) => {
//   return <h1>Hello {match.params.username}!</h1>;
// };

