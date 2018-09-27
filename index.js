// @flow
import { AppRegistry } from 'react-native';
import App from './src/App';

if (typeof __DEV__ === 'boolean' && __DEV__) {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

AppRegistry.registerComponent('GolfMore', () => App);
