import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ExploreScreen from './screens/Explore';
import DetailScreen from './screens/Detail';
import ReserveScreen from './screens/Reserve';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Reserve" component={ReserveScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
