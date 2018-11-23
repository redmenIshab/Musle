import React, { Component, Fragment } from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import { DrawerActions } from "react-navigation";
import { DrawerLabel, MyText } from "../component";
import Images from "../image";
import { PRIMARY_COLOR } from "../asset";

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  profileContainer: { height: 200, backgroundColor: PRIMARY_COLOR },
  profileSubContainer: { flex: 1, paddingHorizontal: 15, alignSelf: "center" },
  ImagesContainer: { flex: 4, justifyContent: "center", alignItems: "center" },
  ImagesStyles: { height: 160, width: 160 },
  userDetailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: PRIMARY_COLOR,
    alignSelf: "center"
  },
  profileMyTextStyle: {
    color: "#fff",
    fontSize: 14,
    paddingTop: 5,
    fontWeight: "bold"
  },
  signOutButtonContainer: {
    flex: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: PRIMARY_COLOR,
    marginHorizontal: 10,
    marginTop: 20
  },
  signOutStyle: { fontSize: 16, color: PRIMARY_COLOR },
  footerStyle: {
    bottom: 0,
    paddingVertical: 20,
    alignSelf: "center"
  }
});

export default class Drawer extends Component {
  state = {
    username: null,
    contact: "+955 9828928923",
    showPaymentOption: false,
    showBookingOption: false
  };

  // componentDidMount() {
  //   UserInfoService.fetchUserInfo()
  //     .then((res) => {
  //       const {
  //         status,
  //         payload: {
  //           user: { name },
  //         },
  //       } = res;
  //       if (status) {
  //         this.setState({
  //           username: name,
  //         });
  //       }
  //     })
  //     .catch(error => true);
  // }

  onAlterPaymentOption = () => {
    const { showPaymentOption } = this.state;
    if (showPaymentOption) {
      this.setState({ showPaymentOption: false });
    } else {
      this.setState({ showPaymentOption: true });
    }
  };

  onAlterBookingOption = () => {
    const { showBookingOption } = this.state;
    if (showBookingOption) {
      this.setState({ showBookingOption: false });
    } else {
      this.setState({ showBookingOption: true });
    }
  };

  handleHome = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  signOut() {
    const { navigation } = this.props;
    navigation.navigate("Login");
  }

  render() {
    const {
      username,
      contact,
      showPaymentOption,
      showBookingOption
    } = this.state;
    const { navigation } = this.props;
    return (
      <Fragment>
        <ScrollView style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.profileSubContainer}>
              <View style={styles.ImagesContainer}>
                <Image
                  source={Images.logo}
                  style={styles.ImagesStyles}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.userDetailsContainer}>
                <MyText style={styles.profileMyTextStyle}>Redmen</MyText>
                {/* <MyText style={styles.profileMyTextStyle}>{contact}</MyText> */}
              </View>
            </View>
          </View>

          <DrawerLabel
            icon={Images.home}
            title="Home"
            onPress={this.handleHome}
          />
          <DrawerLabel
            icon={Images.user}
            title="Profile"
            onPress={() => navigation.navigate("Profile")}
          />

          <DrawerLabel
            icon={Images.key}
            title="Change Password"
            // onPress={() => navigation.navigate('ChangePassword')}
          />

          <DrawerLabel
            icon={Images.logout}
            title="Logout"
            onPress={() => this.signOut()}
          />
          {/* <TouchableOpacity style={styles.signOutButtonContainer} onPress={() => this.signOut()}>
            <MyText style={styles.signOutStyle}>Sign Out!</MyText>
          </TouchableOpacity> */}
        </ScrollView>
        <View style={styles.footerStyle}>
          <MyText style={[styles.profileMyTextStyle, { color: PRIMARY_COLOR }]}>
            Musle || Share Smile
          </MyText>
        </View>
      </Fragment>
    );
  }
}
