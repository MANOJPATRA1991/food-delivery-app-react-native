import React, { useContext } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RoundButton from "../components/Base/RoundButton";
import ThemedText from "../components/UI/ThemedText";
import { AuthContext } from "../context/AuthContext";
import { StackNavigator } from "../navigation/StackNavigator";

const ImagePath = require("../../images/Recraftsoppify_aap_bg_effect.png");

export const Login = () => {
  const { signIn } = useContext(AuthContext);

  return (
    <>
      <ImageBackground source={ImagePath} style={{ width: "100%", height: "100%" }}>
        {/* <TouchableOpacity onPress={() => { }}>
          <MaterialIcon
            name="arrow-left"
            size={30}
            color={theme.textColor}
            style={style.backIcon}
          />
        </TouchableOpacity> */}
        <ScrollView>
          <View style={style.container}>
            <View style={style.topContainer}>
              <ThemedText styleKey="appColor" style={style.title}>
                Login
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <ThemedText style={style.inputLabel} styleKey="inputColor">
                User
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <TextInput
                style={[style.inputContainer, { borderBottomColor: "black", color: "black" }]}
                placeholderTextColor="blue"
                placeholder="placeholder"
              />
            </View>
            <View style={style.childContainer}>
              <ThemedText style={style.inputLabel} styleKey="inputColor">
                Password
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <TextInput
                style={[style.inputContainer, { borderBottomColor: "black", color: "black" }]}
                placeholderTextColor="blue"
                placeholder="placeholder"
                secureTextEntry={true}
              />
            </View>
            <View style={style.childContainer}>
              <ThemedText
                style={style.forgotPassword}
                styleKey="textColor"
                onPress={() => {
                  console.log("ji");
                }}
              >
                Forgot password?
              </ThemedText>
            </View>
            <RoundButton label="LogIn" buttonStyle={{ minWidth: 230 }} onPress={() => signIn()} />
            <View style={style.childContainer}>
              <ThemedText style={style.forgotPassword} styleKey="textColor">
                labelChoice
              </ThemedText>
            </View>
            <View style={style.childContainer}>
              <View style={[style.iconContainer, { shadowColor: "blue", backgroundColor: "red" }]}>
                {/* <Icon
                  name="google"
                  size={30}
                  color={theme.highlightTextColor}
                  style={style.Icon}
                  onPress={() => {
                    alert("google");
                  }}
                /> */}
              </View>
              <View style={[style.iconContainer, { shadowColor: "blue", backgroundColor: "blue" }]}>
                {/* <Icon
                  name="facebook"
                  size={30}
                  color={theme.highlightTextColor}
                  style={[style.Icon]}
                  onPress={() => {
                    alert("google");
                  }}
                /> */}
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
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
});
