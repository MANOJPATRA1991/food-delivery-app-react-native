import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import RoundButton from "./RoundButton";

interface Props {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  buttonStyle?: any;
  labelStyle?: any;
}

const FlatButton: React.FunctionComponent<Props> = ({
  onPress,
  label,
  buttonStyle,
  labelStyle,
}: Props) => {
  return (
    <RoundButton
      label={label}
      onPress={onPress}
      buttonStyle={[style.container, buttonStyle]}
      labelStyle={labelStyle}
    />
  );
};

export default FlatButton;

interface Style {
  container: ViewStyle;
  userNameStyle: TextStyle;
}

const style = StyleSheet.create({
  container: {
    borderRadius: 5,
    minWidth: 230,
  },
});
