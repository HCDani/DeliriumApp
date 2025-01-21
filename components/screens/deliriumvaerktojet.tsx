import * as React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import CustomButton from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
    WebView: { url: string };
};

type AppProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'WebView'>;
  
};

const URL_BASE = "https://delirium.hock.hu/";

  export default function App({navigation}: AppProps) {
    return (
      <View style={styles.container}>
          <View>
          </View>
      <Text  style={styles.header}>For professionelle</Text>
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="healing" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Symptomer</Text>
              </View>
          }
        color="#ff7f50"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'symptomer', 
          })
        }
      />
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="search" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Screeningsværktøjer</Text>
              </View>
          }
          color="#4682b4"
          onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'screeningsvaerktojer', // Pass URL to WebView
          })
        }
      />
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="info" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Årsager</Text>
              </View>
          }
          color="#6a5acd"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'arsager', // Pass URL to WebView
          })
        }
      />
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="chat" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Kommunikation</Text>
              </View>
          }
          color="#32cd32"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'kommunikation', // Pass URL to WebView
          })
        }
      />
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="touch-app" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Handlinger</Text>
              </View>
          }
        color="#40e0d0"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'handlinger', // Pass URL to WebView
          })
        }
      />
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="book" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Læs Mere</Text>
              </View>
          }
        color="#ff4500"
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'laes-mere', // Pass URL to WebView
          })
        }
      />
      <CustomButton
          label={
              <View style={styles.buttonContent}>
                  <Icon name="people" size={24} color="white" style={styles.icon} />
                  <Text style={styles.buttonText}>Pårørende</Text>
              </View>
          }
        color='#ffd822'
        onPress={() =>
          navigation.navigate('WebView', {
            url: URL_BASE + 'professionalparorende', // Pass URL to WebView
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
        backgroundColor: Colors.light.background, 
    },
    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        width: '90%', 
        marginVertical: 15, 
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 6, 
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    customButton: {
        flex:1,
        maxWidth: '45%', 
        paddingVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1, 
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 0,
        backgroundColor: 'transparent',
        
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.light.text, 
        marginBottom: 20,
    },
});