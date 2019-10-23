import axios from "axios";
import { axiosWithAuth } from "../utils";

// action types
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

//action creator
export const newUser = user => dispatch => {
  console.log(user)
  //action object
  dispatch({ type: REGISTER_REQUEST })
  // do some async action and dispatch an error or success action
  axios
    .post(`https://airbnb-optimal.herokuapp.com/api/auth/register`, user)
    .then(res => {
      console.log("POST Request Response: ", res)
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err.payload }));
}


// action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//action creator
export const userLogin = user => dispatch => {
  console.log(user)
  //action object
  dispatch({ type: LOGIN_REQUEST })
  // do some async action and dispatch an error or success action
  axiosWithAuth()
    .post(`https://airbnb-optimal.herokuapp.com/api/auth/login`, user)
    .then(res => {
      console.log("POST Request Response: ", res)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.users_id)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.payload }));
}