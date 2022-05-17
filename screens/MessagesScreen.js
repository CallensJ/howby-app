import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../components/MessagesScreen/HeaderComponent";
import MessagesComponent from "../components/MessagesScreen/MessagesComponent";
import Ionicons from "react-native-vector-icons/Ionicons";
import SliderComponent from "../components/MessagesScreen/SliderComponent";
import TeamComponent from "../components/MessagesScreen/TeamComponent";
import { MESSAGES } from "../data/Messages";
import { USERS } from "../data/Users";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(MESSAGES);
  }, []);

  return (
    <View>
      <HeaderComponent />
      <SliderComponent />
      <TeamComponent />
      <MessagesComponent messages={messages} />
      <View>
        <Text style={styles.title}>Discussions</Text>
      </View>
      <View style={{ margin: "1rem" }}>
        {MESSAGES.map((msg, index) => (
          <View key={index}>
            <View  style={{ flexDirection: "row", justifyContent: 'space-between'}}>
              <View  style={{ flexDirection: "row"}}>
              <Text style={styles.vuStyle}>Vu .</Text>
               <Image
                source={require("../assets/icons/person-circle.svg")}
                style={{ width: 30, height: 30 }}
              />

              <Text>{msg.user}</Text>
              </View>
              <View>
                <Pressable>
                  <Ionicons name="camera-outline" size={20} />
                </Pressable>
              </View>
            </View>

            <Text>{msg.Comment}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1rem",
    color: "#a56210",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "500",
  },

  vuStyle:{
    padding: '5px',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  vuStyleNotSeen:{
    padding: '5px',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center'

  }
});
export default MessagesScreen;
