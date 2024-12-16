// App.js
import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fetchAndSavePages } from './offlineSaver';  // Import the function to fetch and save pages
import WebPage from './WebPage';  // WebPage component

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Offline WordPress App</Text>
      <Button
        title="Go to WebView"
        onPress={() =>
          navigation.navigate('WebView', {
            url: 'https://delirium.hock.hu/screeningsvaerktojer', // Online URL
            offlineSlug: 'screeningsvaerktojer', // Offline slug
          })
        }
      />
    </View>
  );
}

function App() {
  useEffect(() => {
    fetchAndSavePages();  // Fetch pages on app load to store them offline
  }, []);

  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebView" component={WebPage} />
      </Stack.Navigator>
  );
}

export default App;
