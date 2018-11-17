import React from "react";
import { StyleSheet, Text } from "react-native";
import { TEXTCOLOR, PRIMARY_COLOR } from "../asset";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: TEXTCOLOR,
    alignSelf: "flex-start"
  }
});
export default function MyText({ style, label, ...otherProps }) {
  return (
    <Text
      style={[styles.textStyle, style]}
      allowFontScaling={false}
      {...otherProps}
    />
  );
}
