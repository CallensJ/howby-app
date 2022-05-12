import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";



const Name = () => {
  return (
    <>
      <SafeAreaView style={styles.inline}>
        <Icon name="person-circle" size={30} />
        <Text style={{ marginLeft: 10 }}>Prénom et nom</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.inline}>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&",
            }}
            style={styles.img}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.companyName}>item.name</Text>
          <Text>Prénom des utilisateurs présents</Text>
        </View>
      </SafeAreaView>

      <Text>Description du post effectué par l'utilisateur</Text>

      <View style={styles.icons}>
        <Pressable>
          <Icon name="heart-outline" size={30} />
        </Pressable>
        <Pressable>
          <Icon name="chatbox-outline" size={30} />
        </Pressable>
        <Pressable>
          <Icon name="caret-forward-outline" size={30} />
        </Pressable>
      </View>
    </>

  );
};




const styles = StyleSheet.create({
  inline: {
    flexDirection: "row",
    alignItems: "center",
  },

  img: {
    width: "50px",
    height: "50px",
  },

  companyName: {
    fontWeight: "bold",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});



export default Name;
