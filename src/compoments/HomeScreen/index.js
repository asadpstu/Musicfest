/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Slider from '../slider';
import EventComponent from '../event';
import Devider from '../devider';
import EventDetails from '../event/details';
import Organizer from '../organizer';
import Gallery from '../gallery';

const Home = () =>{
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
});

export default Home;


