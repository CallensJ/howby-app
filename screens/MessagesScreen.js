import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/MessagesScreen/HeaderComponent'
import MessagesComponent from '../components/MessagesScreen/MessagesComponent'

import SliderComponent from '../components/MessagesScreen/SliderComponent'
import TeamComponent from '../components/MessagesScreen/TeamComponent'

const MessagesScreen = () => {
  return (
    <View>
      <HeaderComponent />
      <SliderComponent />
      <TeamComponent />
      <MessagesComponent />
      
    </View>
  )
}

export default MessagesScreen