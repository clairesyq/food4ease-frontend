import AsyncStorage from '@react-native-async-storage/async-storage';


export const getSessionToken = async () => {
  try {
    const value = await AsyncStorage.getItem('auth_token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setSessionToken = async (token) => {
  try {
    await AsyncStorage.setItem('auth_token', token);
  } catch (e) {
    return null;
  }
};