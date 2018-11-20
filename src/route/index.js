import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { LoginScreen } from "../container/Auth";
import { HomeScreen } from "../container/Home";
import { PRIMARY_COLOR } from "../asset";
import { TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import image from "../image";
const Dashboard = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerLeft: (
          <Image
            source={image.logo}
            style={{
              height: 50,
              width: 65,
              alignSelf: "center",
              marginLeft: Dimensions.get("window").width / 2.3
            }}
            resizeMode={"center"}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: PRIMARY_COLOR }
    }
  }
);
const screens = createSwitchNavigator(
  {
    Home: Dashboard,
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login"
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: PRIMARY_COLOR }
    }
  }
);
export default screens;
