import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

  submit = (data) =>
      this.props.login(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
        <Link to="/forgot_password">Forgot Password?</Link>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isRequired,
  login: propTypes.func.isRequired
}

export default connect(null, { login })(LoginPage);
