import React from "react";
import Navbar from "./NavBar";
import useForm from "../Hooks/UseForm";
import { connect } from "react-redux";
import { newUser } from "../Action";
import { Link } from 'react-router-dom';


const Registration = props => {
  console.log(props);
  const { values, handleChange, handleSubmit } = useForm(register);

  //register is being pass as a callback function to my custom hook
  function register() {
    console.log(values);
    //dispatch function
    props.newUser(values);
  }

  return (
    <>
    <Navbar />
    <div class="form__wrapper">
      <div class="form__container">
        <h1>Create an account</h1>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.values
  };
};
// I'm connecting to the redux store
export default connect(
  mapStateToProps,
  { newUser }
)(Registration);
