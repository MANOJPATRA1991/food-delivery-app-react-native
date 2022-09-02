import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  password?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  password: undefined,
  favoriteIcon: undefined,
};

// Como luce y qué expone el contexto
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// Proveer el contexto
const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({ type: "signIn" });

  const logOut = () => dispatch({ type: "logOut" });

  const changeFavoriteIcon = (iconName: string) =>
    dispatch({ type: "changeFavIcon", payload: iconName });

  return (
    <>
      <AuthContext.Provider value={{ authState, signIn, logOut, changeFavoriteIcon }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
