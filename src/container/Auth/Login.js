import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { PRIMARY_COLOR } from "../../asset";
import { Button, MyText } from "../../component";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  inputStyle: {
    paddingVertical: 19,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR,
    alignSelf: "stretch",
    marginTop: 5,
    fontSize: 16
  },

  labelTextStyle: {
    color: "#666",
    alignSelf: "flex-start",
    marginTop: 20
  },
  buttonTextStyle: {
    color: PRIMARY_COLOR,
    fontSize: 16
  }
});
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }
  handleOnChangeText(value, type) {
    if (type == "username") {
      this.setState({ username: value });
      return;
    } else if (type == "password") {
      this.setState({ password: value });
      return;
    }
  }
  handleOnSubmit = () => {
    const { username, password } = this.state;
    const { navigation } = this.props;
    if (!password || !username) {
      Alert.alert("Fields cannot be empty!");
      return;
    }
    // navigation.navigate('Home')
  };
  render() {
    return (
      <View style={styles.container}>
        <MyText style={styles.labelTextStyle}>Email</MyText>
        <TextInput
          style={styles.inputStyle}
          placeholder={"e.g redmen@ishab.com"}
          placeholderTextColor={"#bbb"}
          onChangeText={value => this.handleOnChangeText(value, "username")}
        />
        <MyText style={styles.labelTextStyle}>Password</MyText>
        <TextInput
          style={styles.inputStyle}
          placeholder={"e.g *******"}
          placeholderTextColor={"#bbb"}
          onChangeText={value => this.handleOnChangeText(value, "password")}
          secureTextEntry
        />
        <Button label="Login" onPress={this.handleOnSubmit} />
        <View style={{ height: 300 }} />
      </View>
    );
  }
}
