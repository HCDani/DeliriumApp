import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import CustomButton from '@/components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  WebView: { url: string };
};

type AppProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'WebView'>;
};

export default function App({ navigation }: AppProps) {
  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#f8f8f8' }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#333',
          marginBottom: 16,
        }}
      >
        Information og ansvarsfraskrivelse:
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#555',
          lineHeight: 24,
          marginBottom: 16,
        }}
      >
        Oplysningerne i applikationen Deliriumværktøjet må og kan ikke bruges til at stille diagnoser eller fastlægge behandling. Oplysningerne er af generel karakter og udelukkende beregnet som opslagsværk til vejledende orientering for fagprofessionelle eller andre, der er i kontakt med delirøse patienter eller borgere. Applikationen kan således ikke anvendes som erstatning for rådgivning, undersøgelse eller behandling af en læge.
        {'\n\n'}
        Det er derfor af afgørende betydning, at du konsulterer en læge, hvis du har spørgsmål eller bekymringer om dit eget eller andres helbred.
        {'\n\n'}
        Alt indhold i appen er skrevet af fagpersoner med tilknytning til Dansk Delirium Netværk (Danish Delirium Association).
        {'\n\n'}
        Deliriumværktøjet hverken kan eller må erstatte lokale instrukser, vejledninger eller lignende.
        {'\n\n'}
        Deliriumværktøjet leveres til dig uden beregning og uden nogen form for teknisk support eller garanti af nogen art. Det er således ikke garanti for, at Deliriumværktøjet egner sig til det ønskede formål.
        {'\n\n'}
        Installation og brug af Deliriumværktøjet sker på egen risiko. Deliriumværktøjet påtager sig intet ansvar for direkte, indirekte, specielle eller tilfældige følgeskader, som medfører et tab.
        {'\n\n'}
        Dansk Delirium Netværk har ophavsret til alt materiale, som offentliggøres via Deliriumværktøjet-applikationen, medmindre det er angivet, at sådanne rettigheder tilhører tredjemand.
        {'\n\n'}
        Brugere af denne applikation, opnår alene en brugsret til Deliriumværktøjet og må som følge deraf læse, udskrive og kopiere ovennævnte indhold til eget privat brug. Det er således ikke tilladt at kopiere, gemme, gengive, tilpasse, ændre, overføre eller overdrage og udnytte indholdet af applikationen uden tydelig angivelse af kilde/rettighedsindehaver.
      </Text>
    </ScrollView>
  );
}
