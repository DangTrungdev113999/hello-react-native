/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Robot from './src/components/Robot';
import TextBlink from './src/components/TextBlink';
import FlexDimantion from './src/components/FlexDimantion';
import {name as appName} from './app.json';




AppRegistry.registerComponent(appName, () => FlexDimantion);
