import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "LOGOUT":
      return { ...state, email: "", password: "", token: "" };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const initialToken = (() => {
    try {
      return JSON.parse(localStorage.getItem("authToken")) || null;
    } catch {
      return null;
    }
  })();

  const initialState = {
    email: "",
    password: "",
    token: initialToken,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      localStorage.setItem("authToken", JSON.stringify(state.token));
    } else {
      localStorage.removeItem("authToken");
    }
  }, [state.token]);

  return (
    <AuthContext.Provider
      value={{
        email: state.email,
        password: state.password,
        token: state.token,
        authDispatch: dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
