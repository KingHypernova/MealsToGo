import React, { useState } from 'react';
import {
  StatusBar, //ios status bar only
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image } from 'react-native';
import { Card } from 'react-native-paper';
import { styled, ThemeProvider } from 'styled-components';
import {theme} from '../../../infrastructure/theme/index.js';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

// background-color: ${(props)=> props.theme.colors.bg.primary};

const RestaurantContentCard = styled(Card)``;

const RestaurantPhoto = styled(Card.Cover)`
  padding: ${(props)=> props.theme.space.lg};
`;

const Address = styled(Text)`
  font-family: ${(props)=> props.theme.fonts.body};
  font-size: ${(props)=> props.theme.fontSizes.caption};
`;

const RestaurantName = styled(Text)`
  font-family: ${(props)=> props.theme.fonts.heading};
  font-size: ${(props)=> props.theme.fontSizes.body};
`;

const Info = styled(View)`
  padding-horizontal: ${(props)=> props.theme.space.lg};
  padding-bottom: ${(props)=> props.theme.space.lg};
`;

const SecondRow = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space.sm};
`;

const Rating = styled(View)`
  align-items: center;
  flex-direction: row;
`;

const OpenOrClosed = styled(View)`
  flex:1;
  flex-direction: row;
  justify-content: flex-end;
`;


//Pass restaurant obj to RestaurantCard components 
//to be used in restaurant.screens.js
export const RestaurantCard = ({ restaurant = {}}) => {

  //Define restaurant obj
  const {
    name = 'dummy rest',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      'https://images.squarespace-cdn.com/content/v1/5cf423ac7eb1290001ede256/1612896531610-44GAQNJQYWCWBQLN8V3B/Pic+.jpg?format=2500w'
    ],
    address = "999 random st",
    isOpenNow = true,
    rating = 4,
    isClosed = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return(

    <RestaurantContentCard elevation={5}>

      <RestaurantPhoto
        key={name}
        source={{ uri: photos[0] }}
      />
      <Info>
        <RestaurantName> {name} </RestaurantName>

        <SecondRow>

          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>

          <OpenOrClosed>

            {isClosed && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}

            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}

            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />

          </OpenOrClosed>

        </SecondRow>

        <Address> {address} </Address>
      </Info>

    </RestaurantContentCard>

  )
}