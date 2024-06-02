/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Slider from './src/compoments/slider';
import EventComponent from './src/compoments/event';
import Devider from './src/compoments/devider';
import EventDetails from './src/compoments/event/details';
import Organizer from './src/compoments/organizer';
import Gallery from './src/compoments/gallery';



export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
        backgroundColor={'blue'}
        barStyle={"light-content"}
        hidden={false}
        />
        <Slider />
        <EventComponent/>
        <Devider/>
        <EventDetails/>
        <Devider/>
        <Organizer/>
        <Gallery/>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});

export default App;
