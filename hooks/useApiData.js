// hooks/useApiData.js
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// API Configuration
const API_BASE_URL = 'https://catfact.ninja'; // Base URL for your API

export const API_URLS = {
    SYMPTOMS: `${API_BASE_URL}/fact`, // Endpoins
    SCREENINGS: `${API_BASE_URL}/fact`, 
    FIND_AND_REMOVE_CAUSE: `${API_BASE_URL}/fact`,
    COMMUNICATION_WITH_DELIRIUM: `${API_BASE_URL}/fact`,
    PRACTICAL_ACTIONS: `${API_BASE_URL}/fact`,
    PREVENTION: `${API_BASE_URL}/fact`,
    DIFFERENTIAL_DIAGNOSES: `${API_BASE_URL}/fact`,
    READ_MORE: `${API_BASE_URL}/fact`,
};

export const STORAGE_KEYS = {
    SYMPTOMS_DATA: 'symptomsData', // For Symptoms
    SCREENINGS_DATA: 'screeningsData', // For Screening Tools
    FIND_AND_REMOVE_CAUSE_DATA: 'findAndRemoveCauseData', // For Find and Remove the Cause
    COMMUNICATION_WITH_DELIRIUM_DATA: 'communicationWithDeliriumData', // For Communication with Delirium
    PRACTICAL_ACTIONS_DATA: 'practicalActionsData', // For Practical Actions
    PREVENTION_DATA: 'preventionData', // For Prevention
    DIFFERENTIAL_DIAGNOSES_DATA: 'differentialDiagnosesData', // For Differential Diagnoses
    READ_MORE_DATA: 'readMoreData', // For Read More
};


const useApiData = (url, storageKey) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const state = await NetInfo.fetch();
            if (state.isConnected) {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const jsonData = await response.json();

                // Save data to AsyncStorage
                await AsyncStorage.setItem(storageKey, JSON.stringify(jsonData));
                setData(jsonData);
            } else {
                // Load last saved data if offline
                const savedData = await AsyncStorage.getItem(storageKey);
                if (savedData) {
                    setData(JSON.parse(savedData));
                } else {
                    setError('No data available. Please check your internet connection.');
                }
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useApiData;
