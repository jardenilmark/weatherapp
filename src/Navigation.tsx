import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/home/containers/HomeScreenContainer'
import Login from './screens/login/containers/LoginScreenContainer'
import { useSelector } from 'react-redux'
import { RootState } from './store'

const Stack = createStackNavigator()

const Navigation = () => {
  const hasPermission = useSelector((state: RootState) => state.user.hasPermission)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {hasPermission ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
