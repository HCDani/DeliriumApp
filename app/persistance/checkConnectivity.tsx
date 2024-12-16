import NetInfo from '@react-native-community/netinfo';

// Function to check connectivity
const startupFechData = async () => {
  const state = await NetInfo.fetch();
  
  if (state.isConnected) {
    
    return true;
  } else {
    
  }
};

export default startupFechData;



