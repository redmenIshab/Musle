import React, { PureComponent } from 'react';
import {
  View, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { MyText } from '.';
import images from '../image';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: { flex: 2, alignItems: 'center', justifyContent: 'center' },
  imageStyle: {
    height: 20,
    width: 20,
  },
  titleContainer: { flex: 8, justifyContent: 'center' },
  textStyle: { color: '#1b1b1b', fontSize: 16 },
});
export default class DrawerLabel extends PureComponent {
  render() {
    const {
      icon, title, onPress, collapse,
    } = this.props;
    return (
      <TouchableOpacity style={{ height: 50 }} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={icon} style={styles.imageStyle} color="#fff" />
          </View>
          <View style={styles.titleContainer}>
            <MyText style={styles.textStyle}>{title || 'Home'}</MyText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
