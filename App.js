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
import RestaurantItem from './screens/components/RestaurantItem';




// const ITEM_WIDTH = Dimensions.get('window').width //supposed to force proper dimensions. Not functioning. Width is instead specified in RestaurantItem







export default class RestaurantView extends React.Component { //export default is here as a placeholder

  // state ={
  //   column: 2 
  // }


  render() {

    return (
      <View style={restaurantstyles.restaurantContainer}>
        <FlatList
        numColumns={2} //changing this changes column number- its cool. Not needed for MVP maybe later
        data={[
          require("./assets/images/tacomexica.jpg"), //make sure the names dont have spaces, or else they wont show
          require("./assets/images/MatchaRedBean.jpg"),
          require("./assets/images//BananaNutella.jpg"),
          require("./assets/images/CheesecakeDelight.jpg"),
          require("./assets/images/MangoRaspberry.jpg"),
          require("./assets/images/MatchaRedBean.jpg"),
          require("./assets/images/MatchaRedBean.jpg"),



            //pongpon is love. pongpon is life

        ]}
        renderItem={({ item }) => {
          return <RestaurantItem  image={item} //ITEM_WIDTH is part of above note 
          /> 
        }}
        keyExtractor={
          (index) => { return index } 
        }
        />
        {[
          require("./assets/images/tacomexica.jpg"), //deleting this breaks

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





