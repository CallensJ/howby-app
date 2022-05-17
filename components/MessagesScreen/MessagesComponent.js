import { View, Text, TouchableOpacity, StyleSheet,Pressable } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";




const MessagesComponent = ({messages}) => {
  console.log(messages);
  return (
    <>
      <View>
        
      </View>

    </>
  );
};


const Commentaire = (messagescomponent) => (
  <View>
    <Text>{messagescomponent.Comment}</Text>
  </View>
)


const styles = StyleSheet.create({
  icon:{
    width: 25,
    height: 25
  },
});

export default MessagesComponent;
