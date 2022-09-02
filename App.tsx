import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthProvider from "./src/context/AuthContext";
import { Navigator } from "./src/navigation/Navigator";
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
