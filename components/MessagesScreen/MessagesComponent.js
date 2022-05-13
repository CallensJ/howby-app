import { View, Text, TouchableOpacity, StyleSheet,Pressable } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";


const MessagesComponent = () => {
  return (
    <>
      <View>
        <Text>Discussions</Text>
      </View>

      <SafeAreaView>
        <View>
          <Text>Vu .</Text>
          <TouchableOpacity>
            <Ionicons name="person-circle" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Matthieu B</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Pressable>
          <Ionicons name = {"camera-outline"} size={25} style={styles.icon}/>
          </Pressable>
        </View>
      </SafeAreaView>
      <Text> c'est pour quand la revanche !? - 2min</Text>
    </>
  );
};




const styles = StyleSheet.create({
  icon:{
    width: 25,
    height: 25
  }
});

export default MessagesComponent;
