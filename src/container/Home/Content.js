import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from "react-native";
import images from "../../image";
import { MyText } from "../../component";
import { PRIMARY_COLOR } from "../../asset";

const data = [
  {
    name: "Redmen",
    caption: "Life is being yourself not who you read!",
    date: "2018-10-12",
    image: images.steve
  },
  {
    id: 1,
    name: "Redmen",
    caption: "Life is being yourself not who you read!",
    date: "2018-10-12",
    image: images.elon
  },
  {
    id: 2,
    name: "Redmen",
    caption: "Life is being yourself not who you read!",
    date: "2018-10-12",
    image: images.steve
  },
  {
    id: 3,
    name: "Redmen",
    caption: "Life is being yourself not who you read!",
    date: "2018-10-12",
    image: images.elon
  },
  {
    id: 4,
    name: "Redmen",
    caption: "Life is being yourself not who you read!",
    date: "2018-10-12",
    image: images.steve
  }
];
const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("window").width,
    alignSelf: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: PRIMARY_COLOR,
    backgroundColor: "#fff"
  },
  cardimageStyle: { alignSelf: "center" },
  cardimageContainer: { marginVertical: 5 },
  cardTextStyle: {
    marginLeft: 10,
    color: "#000",
    opacity: 0.8,
    paddingBottom: 3
  },
  containerTextStyle: {
    marginLeft: 10,
    color: "#000"
  },
  emojiStyle: {
    height: 25,
    width: 25,
    margin: 5,
    alignSelf: "center"
  },
  profileContainer: {
    flexDirection: "row",
    paddingVertical: 5
  },
  profileImageStyles: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR
  },
  animationContainer: { position: "relative" },
  animatedImageStyle: {
    height: 50,
    width: 50,
    alignSelf: "center",
    position: "absolute",
    left: Dimensions.get("screen").width / 2.5,
    bottom: 300
  }
});
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPress: 0,
      animateOpacity: new Animated.Value(0),
      animate: true
    };
  }
  onPress = () => {
    var delta = new Date().getTime() - this.state.lastPress;
    if (delta < 200) {
      // double tap happend
      //       console.warn(`onPress called!`);
      //       this.setState({ animateOpacity: 1 });
      Animated.timing(this.state.animateOpacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.in
      }).start(() => {
        Animated.timing(this.state.animateOpacity, {
          toValue: 0,
          duration: 300
        }).start();
      });
    }

    this.setState({
      lastPress: new Date().getTime()
    });
  };
  renderCard(item) {
    const { name, caption, date, image } = item;
    const { animateOpacity, animate } = this.state;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImageStyles}
            source={images.user}
            resizeMethod={"resize"}
          />
          <MyText style={styles.containerTextStyle}>{name}</MyText>
        </View>
        <TouchableWithoutFeedback
          style={styles.cardimageContainer}
          onPress={this.onPress}
        >
          <View>
            <View style={styles.animationContainer}>
              <Animated.Image
                source={images.smile}
                style={[
                  styles.animatedImageStyle,
                  {
                    opacity: animateOpacity
                  }
                ]}
                resizeMode={"contain"}
              />
            </View>
            <Image
              source={image}
              style={styles.cardimageStyle}
              //   resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Image
            style={styles.emojiStyle}
            source={images.smile}
            resizeMode={"contain"}
          />
          <Text style={styles.cardTextStyle}>{item.name}:</Text>
          <Text style={styles.cardTextStyle}> {caption}</Text>
          <MyText style={[styles.cardTextStyle, { fontSize: 10 }]}>
            {date}
          </MyText>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item, key }) => this.renderCard(item)}
        />
      </View>
    );
  }
}
