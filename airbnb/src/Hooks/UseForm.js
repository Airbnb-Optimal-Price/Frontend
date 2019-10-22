import { useState } from 'react';

//I'm passing a callback funtion when the form gets submitted
const useForm = (callback) => {

  //I'm setting the initialValue as an empty object
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    //I'm checking if there is event happening, I want to prevent the form from redering the page.
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    //I'm spreading values to add new objects and I'm creating new objects based on the Key:property
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm