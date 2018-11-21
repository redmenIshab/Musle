import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Dimensions, Image } from "react-native";
import { MyText } from "../../component";
import { PRIMARY_COLOR } from "../../asset";
import images from "../../image";

const styles = StyleSheet.create({
  container: { paddingHorizontal: 5 },
  imageContainerStyle: {
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#fff",
    paddingTop: 50
  },
  imageStyles: {
    alignSelf: "center",
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR
  },
  profileDetailContainer: {
    height: 200,
    alignSelf: "stretch",
    backgroundColor: "#eee",
    marginHorizontal: 25,
    borderRadius: 20,
    bottom: 100,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.2,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  bottomContainer: {
    position: "relative",
    height: Dimensions.get("window").height
  }
});
export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainerStyle}>
          <Image
            source={images.steve}
            style={styles.imageStyles}
            resizeMode={"stretch"}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.profileDetailContainer}>
            <MyText>Username</MyText>
          </View>
        </View>
      </ScrollView>
    );
  }
}
