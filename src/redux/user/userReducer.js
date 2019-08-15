import axios from "axios";

const initialState = {
  first_name: "",
  last_name: "",
  display_name: "",
  email: "",
  password: "",
  id: "",
  loggedIn: false
};

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_USER_DATA = "GET_USER_DATA";
const USER_LOGGED_IN = "USER_LOGGED_IN";
const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export function userLoggedIn(authenticated) {
  return { type: USER_LOGGED_IN, payload: authenticated };
}

export function userLoggedOut(authenticated) {
  return { type: USER_LOGGED_OUT, payload: authenticated };
}

export function register(first_name, last_name, display_name, email, password) {
  let data = axios.post("/auth/register", {
    first_name,
    last_name,
    display_name,
    email,
    password
  });
  return {
    type: REGISTER,
    payload: data
  };
}

export function login(email, password) {
  let data = axios.post("./auth/login", { email, password });
  return {
    type: LOGIN,
    payload: data
  };
}

export function logout() {
  let data = axios.get("./auth/logout");
  return {
    type: LOGOUT,
    payload: data
  };
}

export function getUserData() {
  let data = axios.get("/auth/user").then(res => res.data);
  return {
    type: GET_USER_DATA,
    payload: { data }
  };
}

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_USER_DATA}_FULFILLED`:
      return {
        ...state,
        email: action.payload.user.email,
        id: action.payload.user.id,
        error: ""
      };
    case `${USER_LOGGED_IN}`:
      return {
        ...state,
        loggedIn: payload
      };
    case `${USER_LOGGED_OUT}`:
      return {
        ...state,
        loggedIn: payload
      };
    case `${REGISTER}_FULFILLED`:
      return { ...state, user: payload.data, error: "" };
    case `${REGISTER}_REJECTED`:
      return { ...state, password: "", email: "", error: "register" };
    case `${REGISTER}_PENDING`:
      return { ...state, password: "", email: "", error: "" };
    case `${LOGIN}_FULFILLED`:
      return { ...state, user: payload.data, error: "" };
    case `${LOGIN}_REJECTED`:
      return { ...state, password: "", email: "", error: "login" };
    case `${LOGIN}_PENDING`:
      return { ...state, password: "", email: "", error: "" };
    case `${LOGOUT}_FULFILLED`:
      return { ...state, user: payload.data, error: "" };
    case `${LOGOUT}_REJECTED`:
      return { ...state, password: "", email: "", error: "logout" };
    case `${LOGOUT}_PENDING`:
      return { ...state, password: "", email: "", error: "" };
    default:
      return state;
  }
}

export default reducer;
