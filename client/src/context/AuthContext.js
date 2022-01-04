import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: action.payload.token, user: action.payload.user };
    case "LOGOUT":
      return { ...state, token: null, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
    authIsReady: false,
  });

  const login_user = data => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({ type: "LOGIN", payload: data });
  };

  const logout_user = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", payload: null });
  };

  console.log("AuthContext state:", state);

  return <AuthContext.Provider value={{ ...state, login_user, logout_user }}>{children}</AuthContext.Provider>;
};
