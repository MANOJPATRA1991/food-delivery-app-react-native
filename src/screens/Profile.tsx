import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../components/common/Header";
import { AuthContext } from "../context/AuthContext";
import RoundButton from "../components/Base/RoundButton";
import { COLORS, SIZES } from "../../constants";

const ProfileScreen = () => {
  const { logOut } = useContext(AuthContext);
  const imgProfile = require("../../assets/images/avatar-4.jpg");

  return (
    <>
      <SafeAreaView style={style.container}>
        <Header leftIcon={null} rightIcon={null} headerText="Perfil" />
        <View style={style.childContainer}>
          <Image source={imgProfile} style={style.logo} />
        </View>
        <RoundButton
          label="Cerrar sesión"
          buttonStyle={{ minWidth: 230 }}
          labelStyle={{ color: COLORS.lightGray }}
          onPress={() => logOut()}
        />
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.lightGray4,
  },
  childContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 35,
    paddingTop: SIZES.padding,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  logo: {
    width: SIZES.width / 1.5,
    height: SIZES.height / 2.5,
    borderRadius: SIZES.radius * 4,
    borderColor: COLORS.darkgray,
    borderWidth: SIZES.base / 2,
  },
});

export { ProfileScreen };
