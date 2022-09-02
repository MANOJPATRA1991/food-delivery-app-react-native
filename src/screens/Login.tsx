import React, { useContext, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, TextInput, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";

import RoundButton from "../components/Base/RoundButton";
import ThemedText from "../components/UI/ThemedText";
import { AuthContext } from "../context/AuthContext";
import { COLORS } from "../../constants/theme";

const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png");

export const Login = () => {
  const [bottomColorUser, setBottomColorUser] = useState(COLORS.black);
  const [bottomColorPassword, setBottomColorPassword] = useState(COLORS.black);

  const { signIn } = useContext(AuthContext);

  return (
    <>
      <ImageBackground
        source={ImagePath}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollView>
          <View style={style.container}>
            <View style={style.topContainer}>
              <ThemedText styleKey="appColor" style={style.title}>
                Inicio de sesión
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <ThemedText
                style={[style.inputLabel, { color: bottomColorUser }]}
                styleKey="inputColor"
              >
                Usuario
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <TextInput
                style={[
                  style.inputContainer,
                  { borderBottomColor: bottomColorUser, color: COLORS.black },
                ]}
                onFocus={() => setBottomColorUser(COLORS.primary)}
                onBlur={() => setBottomColorUser(COLORS.black)}
                autoCorrect={false}
                placeholderTextColor={COLORS.darkgray}
                placeholder="Usuario"
              />
            </View>
            <View style={style.childContainer}>
              <ThemedText
                style={[style.inputLabel, { color: bottomColorPassword }]}
                styleKey="inputColor"
              >
                Contraseña
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <TextInput
                style={[
                  style.inputContainer,
                  { borderBottomColor: bottomColorPassword, color: COLORS.black },
                ]}
                onFocus={() => setBottomColorPassword(COLORS.primary)}
                onBlur={() => setBottomColorPassword(COLORS.black)}
                placeholderTextColor={COLORS.darkgray}
                placeholder="Contraseña"
                secureTextEntry={true}
              />
            </View>
            <View style={{ marginTop: 40 }}></View>
            <RoundButton
              label="Ingresar"
              buttonStyle={{ minWidth: 230 }}
              labelStyle={{ color: COLORS.lightGray }}
              onPress={() => signIn()}
            />
            <View style={style.childContainer}>
              <ThemedText style={style.forgotPassword} styleKey="textColor">
                ¿Olvidaste tu contraseña?
              </ThemedText>
            </View>
            <View style={[style.childContainer, { marginTop: 20 }]}>
              <View style={[style.iconContainer, { shadowColor: "blue", backgroundColor: "red" }]}>
                <Icon
                  name="google"
                  size={30}
                  color="white"
                  style={style.Icon}
                  onPress={() => {
                    console.log("google");
                  }}
                />
              </View>
              <View style={[style.iconContainer, { shadowColor: "blue", backgroundColor: "blue" }]}>
                <Icon
                  name="facebook"
                  size={30}
                  color="white"
                  style={style.Icon}
                  onPress={() => {
                    console.log("facebook");
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  inputLabel: {
    width: "100%",
    fontSize: 13,
  },
  childContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  forgotPassword: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    height: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    fontSize: 25,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
});
