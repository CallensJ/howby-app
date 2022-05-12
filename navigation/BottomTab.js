import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessagesScreen from "../screens/MessagesScreen";
import SearchScreen from "../screens/SearchScreen";
import CameraScreen from "../screens/CameraScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
// import AccueilScreen from "../screens/AccueilScreen";
import StackNavigation from "./StackNavigation";



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 0,
          elavation: 0,
          backgroundColor: "#ffffff",
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/home.svg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/chatbox-outline.svg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="rechercher"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/search-outline.svg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/camera-outline.svg")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "black",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="notifications" component={NotificationsScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/icons/bell.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "black",
                  }}
                />
              </View>
            ),
          }}
      
      />
    </Tab.Navigator>
  );
};


export default BottomTab;
