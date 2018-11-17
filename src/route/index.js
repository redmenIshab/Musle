import { createStackNavigator } from "react-navigation";
import { LoginScreen } from "../container/Auth";
import { PRIMARY_COLOR } from "../asset";
const screens = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Login"
      }
    }
  },
  {
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: PRIMARY_COLOR }
    }
  }
);
export default screens;
