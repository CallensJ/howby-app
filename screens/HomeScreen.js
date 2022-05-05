import { StatusBar } from "expo-status-bar";
import React from "react";
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

//const ICONS
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch("http://127.0.0.1:8000/api/pois/")
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson["hydra:member"],
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      console.log(this.state.dataSource);
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <>
                <View>
                  <Pressable style={styles.inline}>
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
                        style={{
                          fontSize: 20,
                          marginBottom: ".5rem",
                          marginLeft: "1rem",
                        }}
                      >{`${item.name}`}</Text>

                      <Text
                        style={{ marginLeft: "1rem" }}
                      >{`${item.description}`}</Text>
                    </View>
                  </Pressable>
                </View>

                <View style={styles.bottomComponents}>
                  <Pressable>
                    <Text>Exclusif</Text>
                  </Pressable>

                  <Text>Rating</Text>
                  <Text>Posts</Text>
                  <View>
                    <Pressable
                   
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? 'red'
                          : 'white'
                      },
                      styles.favoriBtn
                    ]}>
                          
                          {({ pressed }) => (
          <Text>
            {pressed ? 'Favori' : ' + Favori'}
          </Text>
        )}
                    

                      
                    </Pressable>
                  </View>
                  <Text></Text>
                </View>
              </>
            )}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem",
  },
  item: {
    flex: 1,
  },

  img: {
    width: "50px",
    height: "50px",
  },
  bottomComponents: {
    marginTop: ".5rem",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "1rem",
    paddingBottom: ".5rem",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  favoriBtn:{
    fontWeight: "bold",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
    
  },

  inline: {
    flexDirection: "row",
  },
});
