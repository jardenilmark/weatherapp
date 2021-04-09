import { AppRegistry } from 'react-native'

import App from './src'
import { name as appName } from './app.json'

/* Registers root component */
AppRegistry.registerComponent(appName, () => App)
