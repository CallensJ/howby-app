import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const MessagesComponent = () => {
  return (
    <>
      <View>
        <Text>Discussions</Text>
      </View>

      <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text>Vu .</Text>
          <TouchableOpacity>
            <Icon name="person-circle" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Matthieu B</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Icon name="camera-outline.svg" size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Text></Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default MessagesComponent;