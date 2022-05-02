import { types } from "../types/types";

// Asi es el objeto que va a recibir mi authReducer
// const initialState = {
//   name: "emanuel",
//   logged: true,
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
