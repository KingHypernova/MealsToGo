import React, { useState } from 'react';
import {
  StatusBar, //ios status bar only
  SafeAreaView,
  StyleSheet,
  Text,
  View } from 'react-native';

//Pass restaurant obj to restaurantInfo components 
//to be used in restaurant.screens.js
export const RestaurantInfo = ({ restaurant = {}}) => {

  //Define restaurant obj
  const {
    name = 'dummy rest',
    icon,
    photos = [
      'https://images.squarespace-cdn.com/content/v1/5cf423ac7eb1290001ede256/1612896531610-44GAQNJQYWCWBQLN8V3B/Pic+.jpg?format=2500w'
    ],
    address = "999 random st",
    isOpenNow = true,
    rating = 4,
    isClosed
  } = restaurant;

  return(

    <Text>
      {name}
    </Text>

  )
}