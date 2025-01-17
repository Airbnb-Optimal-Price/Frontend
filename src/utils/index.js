import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://airbnb-optimal.herokuapp.com',
    headers: {
      //Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
      Authorization: localStorage.getItem('token'),
      ID: localStorage.getItem('id')
    }
  })
}