import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import { LoginScreen } from "../container/Auth";
import { HomeScreen } from "../container/Home";
import { PRIMARY_COLOR } from "../asset";
import { TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import image from "../image";
import Drawer from "./Drawer";
const Dashboard = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              source={image.menu}
              style={{
                height: 25,
                width: 25,
                alignSelf: "center"
              }}
              resizeMode={"center"}
            />
          </TouchableOpacity>
        ),
        headerRight: (
          <Image
            source={image.logo}
            style={{
              height: 50,
              width: 65,
              alignSelf: "center",
              marginRight: Dimensions.get("window").width / 2.4
            }}
            resizeMode={"center"}
          />
        )
      })
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
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: Dashboard
  },
  {
    contentComponent: Drawer
  }
);
const screens = createSwitchNavigator(
  {
    Home: AppDrawerNavigator,
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
