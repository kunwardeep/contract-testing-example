import React, { Component } from 'react';
import { userDetail } from '../../actions/githubActions';

import { connect } from 'react-redux';


class UserDetails extends Component {
  render() {
    const { userDetail } = this.props;
    return (
      <div >
        login: {userDetail.login || 'unknown'}   <br />
        company: {userDetail.company || 'unknown'}  <br />
        blog: {userDetail.blog || 'unknown'} <br />
      </div>);
  }
}

const mapStateToProps = (state) => {
  return { userDetail: state.userDetail };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    userDetailCall: dispatch(userDetail(props.match.params.userlogin))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
