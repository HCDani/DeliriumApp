import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const URL_BASE = "https://delirium.hock.hu/";

  export default function App({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Symptomer"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'Symptomer', // Pass URL to WebView
          })
        }
      />
      <Button
        title="Screeningsværktøjer"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'screeningsvaerktojer', // Pass URL to WebView
          })
        }
      />
      <Button
        title="Årsagen"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'arsagen', // Pass URL to WebView
          })
        }
      />
      <Button
        title="Kommunikation"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'kommunikation', // Pass URL to WebView
          })
        }
      />
      <Button
        title="Handlinger"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'handlinger', // Pass URL to WebView
          })
        }
      />
      <Button
        title="Læs Mere"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'laes-mere', // Pass URL to WebView
          })
        }
      />
      <Button
        title="Pårørende"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'parorende', // Pass URL to WebView
          })
        }
      />
    </View>
        
    );
}