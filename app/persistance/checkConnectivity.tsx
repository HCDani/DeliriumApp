import NetInfo from '@react-native-community/netinfo';

// Function to check connectivity
const checkConnectivity = async () => {
  const state = await NetInfo.fetch();
  
  if (state.isConnected) {
    
    return true;
  } else {
    return false;
  }
};

export default checkConnectivity;



