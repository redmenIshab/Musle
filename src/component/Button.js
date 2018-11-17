import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import MyText from "./MyText";
import {
  PRIMARY_COLOR,
  BUTTONHEIGHT,
  BUTTONWIDTH,
  BUTTONRADIUS
} from "../asset";
const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: BUTTONHEIGHT,
    width: BUTTONWIDTH,
    borderWidth: 1,
    alignSelf: "center",
    marginVertical: 10,
    marginTop: 20,
    borderRadius: BUTTONRADIUS,
    borderColor: PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center"
  },
  labelTextStyle: {
    color: PRIMARY_COLOR,
    alignSelf: "center"
  }
});
export default function Button({ style, label, ...otherProps }) {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} {...otherProps}>
      <MyText style={styles.labelTextStyle}>{label}</MyText>
    </TouchableOpacity>
  );
}
