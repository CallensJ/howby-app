import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import BottomTab from './navigation/BottomTab';


const App = () => {
  return (
    <>
    <NavigationContainer>
      
      <StackNavigation />
    </NavigationContainer>
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
    </>
  );
}

export default App;