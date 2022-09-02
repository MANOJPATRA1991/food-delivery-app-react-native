import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedback,
} from "react-native";
import ThemedText from "../UI/ThemedText";
import { COLORS } from "../../../constants/theme";

interface Props {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  buttonStyle?: any;
  labelStyle?: any;
}

const RoundButton: React.FunctionComponent<Props> = ({
  onPress,
  label,
  buttonStyle,
  labelStyle,
}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          style.container,
          {
            shadowColor: COLORS.primary,
            backgroundColor: COLORS.primary,
            borderColor: COLORS.secondary,
          },
          buttonStyle,
        ]}
      >
        <ThemedText styleKey="highlightTextColor" style={[style.userNameStyle, labelStyle]}>
          {label}
        </ThemedText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RoundButton;

interface Style {
  container: ViewStyle;
  userNameStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6,
    minWidth: 30,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  userNameStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
