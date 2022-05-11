import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/MessagesScreen/HeaderComponent'
import MessagesComponent from '../components/MessagesScreen/MessagesComponent'

const MessagesScreen = () => {
  return (
    <View>
      <HeaderComponent />
      <MessagesComponent />
    </View>
  )
}

export default MessagesScreen