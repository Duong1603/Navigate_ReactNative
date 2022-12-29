import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';
import { DetailsScreen } from './src/Detailpage';
import { HomeScreen } from './src/Homepage';
import mapView from './src/Mapview';
import Profile from './src/Profile';

const Drawer = createDrawerNavigator();
enableExperimentalWebImplementation(true);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Page',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        >
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Map" component={mapView} />
        <Drawer.Screen name="Profie" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
