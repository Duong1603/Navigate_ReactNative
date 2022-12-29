import * as React from 'react';
import {Button, Text, View} from 'react-native';

export function HomeScreen({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}
