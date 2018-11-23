import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text
} from "react-native";
import { MyText } from "../../component";
import { PRIMARY_COLOR } from "../../asset";
import images from "../../image";

const styles = StyleSheet.create({
  container: { paddingHorizontal: 5 },
  imageContainerStyle: {
    height: Dimensions.get("window").height / 2,
    backgroundColor: "#fff",
    paddingTop: 50,
    borderBottomWidth: 1,
    borderColor: PRIMARY_COLOR
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
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR
  },
  bottomContainer: {
    position: "relative",
    height: Dimensions.get("window").height
  },
  textStyle: {
    alignSelf: "center"
  },
  profileDataContainer: {
    flexDirection: "row",
    alignSelf: "center",
    paddingVertical: 20
  },
  profileStateContainer: {
    alignSelf: "center",
    height: 80,
    width: 80,
    justifyContent: "center"
  },
  statusContainer: {
    paddingHorizontal: 10
  }
});
const payload = {
  username: "Steve Jobs",
  posts: 112,
  followers: 1000,
  reaction: 12000,
  status: "Smile is the beautiful curve one possess"
};
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
            <MyText style={styles.textStyle}>{payload.username} </MyText>
            <View style={styles.profileDataContainer}>
              <View style={styles.profileStateContainer}>
                <MyText style={{ color: "#ff2e63", alignSelf: "center" }}>
                  {payload.posts}
                </MyText>
                <MyText style={{ alignSelf: "center" }}>Posts</MyText>
              </View>
              <View style={styles.profileStateContainer}>
                <MyText style={{ color: "#ff2e63", alignSelf: "center" }}>
                  {payload.reaction}
                </MyText>
                <Image
                  source={images.smile}
                  style={{ height: 20, width: 20, alignSelf: "center" }}
                />
              </View>
              <View style={styles.profileStateContainer}>
                <MyText style={{ color: "#ff2e63", alignSelf: "center" }}>
                  {payload.followers}
                </MyText>
                <MyText style={{ alignSelf: "center" }}>Followers</MyText>
              </View>
            </View>
            <View style={styles.statusContainer}>
              <Text style={{ alignSelf: "center", fontSize: 14 }}>
                "{payload.status}"
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
