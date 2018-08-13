import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  ImageBackground,
  FlatList, //FlatList is what helps do array things
  Dimensions,
  AppRegistry,
  Button, 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MenuItem from './components/MenuItem'
import MenuView from '/Users/Viktor/menu3-reactnative/screens/MenuView';


export default class RestaurantView extends React.Component { 
  static navigationOptions = {
    title: 'RestaurantView',
  };
  


  state ={
    column: 2 
  }


  render() {

    return (
      <View style={restaurantstyles.restaurantContainer}>
        <FlatList
        numColumns={2} //changing this changes column number- its cool. Not needed for MVP maybe later
        data={[
          require("/Users/Viktor/menu3-reactnative/assets/images/tacomexica.jpg"), //make sure the names dont have spaces, or else they wont show
          require("/Users/Viktor/menu3-reactnative/assets/images/MatchaRedBean.jpg"),
          require("/Users/Viktor/menu3-reactnative/assets/images/BananaNutella.jpg"),
          require("/Users/Viktor/menu3-reactnative/assets/images/CheesecakeDelight.jpg"),
          require("/Users/Viktor/menu3-reactnative/assets/images/MangoRaspberry.jpg"),
          require("/Users/Viktor/menu3-reactnative/assets/images/MatchaRedBean.jpg"),
          require("/Users/Viktor/menu3-reactnative/assets/images/MatchaRedBean.jpg"),


    

            //pongpon is love. pongpon is life

        ]}
        renderItem={({ item }) => {
          return <RestaurantItem itemWidth={ITEM_WIDTH/2} image={item} //ITEM_WIDTH is part of above note 
          /> 
        }}
        keyExtractor={
          (index) => { return index } 
        }
        />
        {[
          require("/Users/Viktor/menu3-reactnative/assets/images/tacomexica.jpg"), //deleting this breaks

        ]
          .map((item, index) => {
            console.log("renderItem,",item)
            return <RestaurantItem key={index} images={item} />
          })
        }
      </View>
    )
  }  
}

const restaurantstyles = StyleSheet.create({
  restaurantContainer: {

    flexDirection: 'column', //this is deprecated
    backgroundColor: '#DAF1F7',

  },

});






