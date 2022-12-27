import axios from "axios";
import { useContext } from "react";
import { AuthContext } from '../contexts/UserContext';



export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const axiosAuth = axios.create({
  baseURL: process.env.REACT_APP_API,
});

axiosAuth.interceptors.request.use(
  
  async (config) => {
    const {user } = useContext(AuthContext);
    // let user = await firebase.auth().currentUser;
    config.headers.token = user ? await user.getIdToken(true) : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
