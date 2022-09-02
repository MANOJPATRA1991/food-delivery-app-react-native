import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import { Login } from "./src/screens/Login";
import { Navigator } from "./src/navigation/Navigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { COLORS } from "./constants";

export const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        <AuthProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaView>
    </>
  );
};
