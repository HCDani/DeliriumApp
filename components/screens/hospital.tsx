import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import intensiv from "../screens/intensiv";

const HospitalStack = createNativeStackNavigator();

export default function Hospital() {
    return (
        <View>
            <HospitalStack.Navigator>
              <HospitalStack.Screen name="Hospital" component={HospitalScreen} />
      
              </HospitalStack.Navigator>
              <Text>Hospital page! </Text>
        </View>
    );
}
function HospitalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Intensiv"
        onPress={() => navigation.navigate('Intensiv')}
      />
    </View>
  );
}


