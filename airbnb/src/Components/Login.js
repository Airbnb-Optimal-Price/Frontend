import React from "react";
import useForm from "../Hooks/UseForm";
import Navbar from "./NavBar";
import { connect } from "react-redux";
import { userLogin } from "../Action";
import { Link } from 'react-router-dom';

const Login = props => {
  const { values, handleChange, handleSubmit } = useForm(login);

  //login is being pass as a callback function to my custom hook
  function login() {
    console.log(values);
    //dispatch function
    props.userLogin(values)
    props.history.push('/dashboard');
  }

  return (
    <>
    <Navbar />
    <div className="form__wrapper">
      <div className="form__container">
        <h1>Welcome Back <span role="img" aria-label="img">👋</span></h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            placeholder="username"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <p>New here?<Link to="/registration">Sign Up</Link></p>
    </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.values
  }
}

// I'm connecting to the redux store
export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
