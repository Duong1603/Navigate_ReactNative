import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, View} from 'react-native';
import {HomeScreen} from './Homepage';
import mapView from './Mapview';

export default function Profile({navigation}) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Messages" component={mapView} />
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </Tab.Navigator>
  );
}
