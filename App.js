import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ChatScreen: ChatScreen
  },
  {
    initialRouteName: "ChatScreen"
  }
);

export default createAppContainer(AppNavigator);