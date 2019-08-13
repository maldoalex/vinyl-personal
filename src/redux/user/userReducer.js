import axios from "axios";

const initialState = {
  first_name: "",
  last_name: "",
  display_name: "",
  email: "",
  password: "",
  user: {}
};

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

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

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${REGISTER}_FULFILLED`:
      return { ...state, user: payload.data, error: "" };
    case `${REGISTER}_REJECTED`:
      return { ...state, password: "", email: "", error: "register" };
    case `${REGISTER}_PENDING`:
      return { ...state, password: "", email: "", error: "" };
    default:
      return state;
  }
}

export default reducer;

// // import axios from "axios";

// // const INITIAL_STATE = {
// //   currentUser: null
// // };

// // const SET_CURRENT_USER = "SET_CURRENT_USER";

// // export const userReducer = (state = INITIAL_STATE, action) => {
// //   switch (action.type) {
// //     case "SET_CURRENT_USER":
// //       return {
// //         ...state,
// //         currentUser: action.payload
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export default userReducer;

// import axios from "axios";

// const initialState = {
//   first_name: "",
//   last_name: "",
//   display_name: "",
//   email: "",
//   password: ""
// };

// const REGISTER = "REGISTER";
// const LOGIN = "LOGIN";
// const LOGOUT = "LOGOUT";

// // export function updateInput(name, value) {
// //   return {
// //     type: UPDATE_INPUT,
// //     payload: {
// //       name,
// //       value
// //     }
// //   };
// // }

// export function register(first_name, last_name, display_name, email, password) {
//   let data = axios.post("/auth/register", {
//     first_name,
//     last_name,
//     display_name,
//     email,
//     password
//   });
//   return {
//     type: REGISTER,
//     payload: data
//   };
// }

// function reducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case `${REGISTER}_FULFILLED`:
//       return {
//         ...state
//       };
//     case `${REGISTER}_REJECTED`:
//       return {
//         ...state,
//         password: "",
//         email: "",
//         first_name: "",
//         last_name: "",
//         display_name: "",
//         error: "register"
//       };
//     case `${REGISTER}_PENDING`:
//       return {
//         ...state,
//         password: "",
//         email: "",
//         first_name: "",
//         last_name: "",
//         display_name: "",
//         error: ""
//       };
//     case `${LOGIN}_FULFILLED`:
//       return { ...state, id: payload.data.id, error: "" };
//     case `${LOGIN}_REJECTED`:
//       return { ...state, password: "", email: "", error: "login" };
//     case `${LOGIN}_PENDING`:
//       return { ...state, password: "", email: "", error: "" };
//     // case UPDATE_INPUT:
//     //   return { ...state, ...{ [action.payload.name]: action.payload.value } };
//     default:
//       return state;
//   }
// }

// export default reducer;
