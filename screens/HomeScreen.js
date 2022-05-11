import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Pressable,
  Button,
  Image,
} from "react-native";

const App = () => {
    const navigation = useNavigation();
    const [dataSource, setDataSource] = useState([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/pois/")
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson)
            setDataSource(responseJson["hydra:member"]);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <View style={styles.container}>
          <FlatList
            data={dataSource}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <>
                <SafeAreaView>
                  <Pressable style={styles.inline}
                  onPress={()=> navigation.navigate("DescriptionScreen")}>
                    <View>
                      <Image
                        source={{
                          uri: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&",
                        }}
                        style={styles.img}
                      />
                    </View>
                    <View style={{ marginTop: "1rem" }}>
                      <Text
                      
                      title="test"
                        style={styles.title}
                      >{`${item.name}`}</Text>
                        {item.description ? 
                        <Text style={{ marginLeft: "1rem" }}>
                          {`${item.description?.slice(0,50)}`}
                      </Text>
                      : null
            }
                
                    </View>
                  </Pressable>
                </SafeAreaView>

                <View style={styles.bottomComponents}>
                  <Text style={styles.exclusifBtn}>Exclusif</Text>
                  <Text style={styles.rating}>
                    <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/000000/star--v1.png'}} style={{height: 15, width: 15,
                  marginRight: 10}}/>Rating</Text>
                  <Text style={styles.posts}>#  Posts</Text>
                  <View>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed ? "red" : "white",
                        },
                        styles.favoriBtn,
                      ]}
                    >
                      {({ pressed }) => (
                        <Text>{pressed ? "Favori" : " +    Favori"}</Text>
                      )}
                      
                    </Pressable>
                    
                  </View>
                  <Text>+</Text>
                </View>
              </>
            )}
          />
        </View>
      );
}

export default App;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    margin: "1rem",
  },
  item: {
    flex: 1,
  },

  img: {
    width: "50px",
    height: "50px",
  },
  title:{
    fontSize: 17,
    marginTop: -15,
    marginLeft: "1rem",
    marginBottom: '.2rem'
  },
  bottomComponents: {
    marginTop: ".5rem",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    paddingBottom: ".5rem",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    textAlignVertical: 'center'
  },
  favoriBtn:{
    fontWeight: "",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "red",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
  
  },
  exclusifBtn: {
    fontWeight: "bold",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
   color: "#fff",
    backgroundColor: "#c48d52",
  },
  rating:{
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#efefef",
    paddingTop: 3,

    
  },
  posts:{
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#efefef",
    paddingTop: 5,

  },
  inline: {
    flexDirection: "row",
  },
});