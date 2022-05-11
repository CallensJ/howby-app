import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Name from '../components/Name'
import MiddleArea from '../components/MiddleArea'

const DescriptionScreen = () => {
  return (
    <>
      <SafeAreaView  style={styles.container}>
        <Name />
        <MiddleArea />
      </SafeAreaView>

    </>
  )
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    margin: "1rem",
  },
})
export default DescriptionScreen