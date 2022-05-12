import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { IMAGES } from "../../data/Images";

const SliderComponent = () => {

  return (
    <>
      <View>
        <Text style={{ color: 'brown', letterSpacing: 1, marginLeft: '1rem', marginTop: '.5rem', marginBottom: '.5rem' }}>Sorties et Groupes</Text>

      </View>
      <View>
        <ScrollView horizontal persitentScrollbar={true}>
          {IMAGES.map((img, index) => (
            <View key={index} tyle={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image source={{ uri: img.image }} style={styles.imgStyle}
              />
              <Text style={styles.sliderText}>{img.name}</Text>
            </View> 
          ))}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginLeft: 6,
    
  },
  sliderText:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'gray',
    color: 'white',
    margin: 'auto 0'
    


  }
})

export default SliderComponent