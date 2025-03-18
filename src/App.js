
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './router';


const App = () => {
  return(
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView : {
    backgroundColor : Colors.lighter,
  }
});

export default App;
