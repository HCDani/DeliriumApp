import  React from 'react';
import { Text, View} from 'react-native';
import { Colors } from '@/constants/Colors';
import CustomButton from '@/components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const URL_BASE = "https://delirium.hock.hu/";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Symptomer'>;
};
type RootStackParamList = {
  Symptomer: undefined; // If no params are passed
  Screeningsværktøjer: undefined;
  Årsagen: undefined;
  Kommunikation: undefined;
  Handlinger: undefined;
  LæsMere: undefined;
  Pårørende: undefined;
};


export default function Deliriumvaerktojet({ navigation }: Props) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <CustomButton
            label="Symptomer"
            color={Colors.light.symptomer} // Light blue
            onPress={() => navigation.navigate('Symptomer')}
        />
        <CustomButton
            label="Screeningsværktøjer"
            color={Colors.light.screeningsværktøjer} // Orange
            onPress={() => navigation.navigate('Screeningsværktøjer')}
        />
        <CustomButton
            label="Årsagen"
            color={Colors.light.årsagen} // Light green
            onPress={() => navigation.navigate('Årsagen')}
        />
        <CustomButton
            label="Kommunikation"
            color={Colors.light.kommunikation} // Tomato
            onPress={() => navigation.navigate('Kommunikation')}
        />
        <CustomButton
            label="Handlinger"
            color={Colors.light.handlinger} // Medium purple
            onPress={() => navigation.navigate('Handlinger')}
        />
        <CustomButton
            label="Læs Mere"
            color={Colors.light.læsMere} // Gold
            onPress={() => navigation.navigate('LæsMere')}
        />
        <CustomButton
            label="Pårørende"
            color={Colors.light.pårørende} // Steel blue
            onPress={() => navigation.navigate('Pårørende')}
        />
     

    
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

  
        
    );
}
