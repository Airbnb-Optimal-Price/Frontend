import React from "react";
import useForm from "../Hooks/UseForm";

const Registration = () => {
  const { values, handleChange, handleSubmit } = useForm(
    { name: "", lastName: "", email: "", password: "" },
    login
  );

  function register() {
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          required
        />
        <input
          className="input"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          required
        />
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
        <button type="submit">Registration</button>
      </form>
    </>
  );
};

export default Registration;
