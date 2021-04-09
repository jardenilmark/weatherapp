import * as React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { RootState } from './store'

import Login from './screens/login/containers/LoginScreenContainer'
import Weather from './screens/weather/containers/WeatherScreenContainer'
import Landing from './screens/landing/containers/LandingScreenContainer'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

/* Navigate between screens via drawer by swiping from the left side towards the right
   Ensures users without access tokens cant jump to these routes */
const HomeScreen = () => {
  return (
    <Drawer.Navigator initialRouteName={'Landing'}>
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen name="Weather" component={Weather} />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  /* Checks if user has github access token or not */
  const hasPermission = useSelector((state: RootState) => state.user.hasPermission)

  /* Main screens
     Shows home screen only if authorized */
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hasPermission ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
