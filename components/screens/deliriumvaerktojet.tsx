import * as React from 'react';
import { Button, Text, View } from 'react-native';
import CustomButton from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const URL_BASE = "https://delirium.hock.hu/";

  export default function App({navigation}) {
    return (
      <View style={styles.container}>
      <Text>Home Screen</Text>
      <CustomButton
        label="Symptomer"
        color="#ff7f50"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'Symptomer', // Pass URL to WebView
          })
        }
      />
      <CustomButton
          label="Screeningsværktøjer"
          color="#4682b4"
          onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'screeningsvaerktojer', // Pass URL to WebView
          })
        }
      />
      <CustomButton 
          label="Årsagen"
          color="#6a5acd"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'arsagen', // Pass URL to WebView
          })
        }
      />
      <CustomButton 
          label="Kommunikation"
          color="#32cd32"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'kommunikation', // Pass URL to WebView
          })
        }
      />
      <CustomButton
        label="Handlinger"
        color="#ffa500"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'handlinger', // Pass URL to WebView
          })
        }
      />
      <CustomButton
        label="Læs Mere"
        color="#ff4500"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'laes-mere', // Pass URL to WebView
          })
        }
      />
      <CustomButton
        label="Pårørende"
        color='#FFC107'
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'parorende', // Pass URL to WebView
          })
        }
      />
    </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.background, // Use background color from Colors
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.light.text, // Use text color from Colors
        marginBottom: 20,
    },
});