import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";
import { PRIMARY_COLOR } from "../../asset";
import { Button, MyText } from "../../component";
import Content from "./Content";

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Content />
      </ScrollView>
    );
  }
}
