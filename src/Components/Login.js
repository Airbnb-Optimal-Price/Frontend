import React from "react";
import useForm from "../Hooks/UseForm";

const Login = () => {
  const { values, handleChange, handleSubmit } = useForm({email: '', password: ''},login);

  function login() {
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
