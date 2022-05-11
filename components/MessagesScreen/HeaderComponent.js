import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const HeaderComponent = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: "900" }}>Messages</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require("../../assets/icons/search-outline.svg")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios-glyphs/60/000000/new-message.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.icons8.com/ios/50/ffffff/compass--v1.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View>
        <Text>Sorties et Groupes</Text>
        <Text>Slider ici ! </Text>
      </View>
    </>
  );
};

export default HeaderComponent;
