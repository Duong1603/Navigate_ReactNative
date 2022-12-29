import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, View} from 'react-native';

export default function Profile({navigation}) {
  const Tab = createBottomTabNavigator();
  return (
    <View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="View Map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}

// chưa thể gọi vào từ trang home page
