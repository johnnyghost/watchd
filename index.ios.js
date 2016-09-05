import { AppRegistry } from 'react-native';
import Watchd from 'components/Root';

if (__DEV__) {
  console.log('in debug');
} else {
  console.log('in prod');
}
AppRegistry.registerComponent('watchd', ():Object => Watchd);
