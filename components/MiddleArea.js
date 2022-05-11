import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import React from 'react'

const MiddleArea = () => {
    return (
        <>
        <SafeAreaView style={styles.inline}>
        <Icon name="person-circle" size={30} />
            <Text style={{marginLeft: 10}}>Prénom et nom</Text>
        </SafeAreaView>
        <View style={styles.post}>
            <Text>Post ayant le # de l'entreprise</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    inline: {
    
      flexDirection: "row",
      alignItems: "center",
    },
    post:{
        backgroundColor: 'gray',
        height: '300px',
        textAlign:'center',
        justifyContent: 'center'
    }
})


export default MiddleArea