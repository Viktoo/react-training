import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';

export default class MenuItem extends React.Component {
  render() {
    return (
      <View style={styles.PicContainer}>
        <Image style={styles.pic} source={this.props.image}> 
        </Image>
      </View>

    );
  }
}

  const styles = StyleSheet.create({
  PicContainer: {
   paddingLeft: 5, 
   paddingTop: 5,

  },

  pic: {
    width: 180, //will eventually need to progromatically match these to size of screen
    height: 180
  }
});


