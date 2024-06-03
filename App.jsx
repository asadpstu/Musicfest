import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InvitationScreen from './src/compoments/invitationScreen';
import HomeScreen from './src/compoments/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Invite' component={InvitationScreen} 
          options={{ headerShown: true, headerTitle: 'Invite Friends', }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






