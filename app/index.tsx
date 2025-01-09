import React, { useEffect } from 'react';
import StackNavigator from "../components/navigation/stackNavigation";
import checkConnectivity from "./persistance/checkConnectivity";
import fetchPageLinksAndSave from './persistance/fetchPageLinksAndSave'; // Adjust path as necessary

export default function App() {
  // Run only once when the component mounts
  useEffect(() => {
    const initializeApp = async () => {
      const isConnected = await checkConnectivity();
      if (isConnected) {
        console.log('Connected to the internet from main');
        await fetchPageLinksAndSave(); // Ensure this runs once during initialization
      } else {
        console.log('No internet connection from main');
      }
    };

    initializeApp();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <StackNavigator />
  );
}
