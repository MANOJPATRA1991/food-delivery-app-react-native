import { AuthState } from "./AuthContext";

type AuthAction =
  | { type: "signIn" }
  | { type: "logOut" }
  | { type: "changeFavIcon"; payload: string };

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "signIn":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "logOut":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "changeFavIcon":
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    default:
      return state;
  }
};
