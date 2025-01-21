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
              {/* Professional Staff Button */}
              <CustomButton
                  label={
                      <View style={styles.buttonContent}>
                          <Icon name="work" size={20} color="white" style={styles.icon} />
                          <Text style={styles.buttonText}>Professionel</Text>
                      </View>
                  }
                  color="#57a40a"
                  style={styles.customButton}
                  onPress={() =>
                      navigation.navigate('Profesional Staff')
                  }
              />
              {/* Relatives Button */}
              <CustomButton
                  label={
                      <View style={styles.buttonContent}>
                          <Icon name="family-restroom" size={20} color="white" style={styles.icon} />
                          <Text style={styles.buttonText}>Pårørende</Text>
                      </View>
                  }
                  color="#8b0000"
                  style={styles.customButton}
                  onPress={() =>
                      navigation.navigate('WebView', {
                          url: URL_BASE + 'parorende', 
                      })
                  }
              />
              {/* About Staff Button */}
              <CustomButton
                label={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="perm-device-information" size={20} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 16, color: 'white', flexShrink: 1 }}>
                         Om ansøgningen og ansvarsfraskrivelse
                    </Text>
                </View>
                }
                color="#007BFF"
            style={{
                padding: 10,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={() => navigation.navigate('about')}
                />

          </View>
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