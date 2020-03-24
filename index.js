/**
 * @format
 */

import { AppRegistry} from 'react-native';
import App from './App';
import Robot from './src/components/Robot';
import TextBlink from './src/components/TextBlink';
import FlexDimantion from './src/components/FlexDimantion';
import TextExample from './src/components/TextInput';
import ButtonExample from './src/components/Button';
import TouchEventExample from './src/components/touch';
import ScrollViewExample from './src/components/ScrollView';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ScrollViewExample);
