import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import { Login } from "./src/screens/Login";
import { Navigator } from "./src/navigation/Navigator";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
};
