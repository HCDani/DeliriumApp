import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


  export default function App({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Screeningsværktøjer" onPress={() => navigation.navigate('Screeningsværktøjer')}/>
      <Button title="Symptomer" onPress={() => navigation.navigate('Symptomer')}/>
      <Button title="Screeningsværktøjer" onPress={() => navigation.navigate('Screeningsværktøjer')}/>
      <Button title="Årsagen" onPress={() => navigation.navigate('Årsagen')}/>
      <Button title="Kommunikation" onPress={() => navigation.navigate('Kommunikation')}/>
      <Button title="Handlinger" onPress={() => navigation.navigate('Handlinger')}/>
      <Button title="Læs Mere" onPress={() => navigation.navigate('LæsMere')}/>
      <Button title="Pårørende" onPress={() => navigation.navigate('Pårørende')}/>
    </View>
        
    );
}