import React from "react";
import { TextProps, Text, StyleProp, TextStyle } from "react-native";

interface Props extends TextProps {
  children: React.ReactChild;
  styleKey: string;
  style?: any;
  onPress?: () => void;
}

const ThemedText: React.FunctionComponent<Props> = (props: Props) => {
  const { children, style, onPress, styleKey, ...restProps } = props;

  const themeColorStyle: StyleProp<TextStyle> = [{ color: "black" }];

  const newStyle: StyleProp<TextStyle> = themeColorStyle.concat(style);

  return (
    <Text style={newStyle} {...restProps} onPress={onPress}>
      {props.children}
    </Text>
  );
};

export default ThemedText;
