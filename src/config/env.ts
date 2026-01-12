import { Platform } from 'react-native';

const IP = '192.168.1.100';

export const API_URL =
  Platform.OS === 'web'
    ? 'http://localhost/estudo/api'
    : `http://${IP}/estudo/api`;
