import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/MessagesScreen/HeaderComponent'
import MessagesComponent from '../components/MessagesScreen/MessagesComponent'

import SliderComponent from '../components/MessagesScreen/SliderComponent'

const MessagesScreen = () => {
  return (
    <View>
      <HeaderComponent />
      <SliderComponent />
      <MessagesComponent />
      
    </View>
  )
}

export default MessagesScreen