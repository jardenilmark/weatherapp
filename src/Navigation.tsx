import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Landing from './screens/landing/containers/LandingScreenContainer'
import Login from './screens/login/containers/LoginScreenContainer'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import Weather from './screens/weather/components/WeatherScreen'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const HomeScreen = () => {
  return (
    <Drawer.Navigator initialRouteName={'Landing'}>
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen name="Weather" component={Weather} />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  const hasPermission = useSelector((state: RootState) => state.user.hasPermission)

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
