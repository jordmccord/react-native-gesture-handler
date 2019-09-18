import { Platform } from 'react-native';

module.exports = {
  USE_NATIVE_DRIVER: Platform.OS === 'web' ? false : true,
};
