import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import { portraitStyles, landscapeStyles } from './styles/loginScreenStyles'
import { isOnLandscape } from '../../../common/dimensions'

/* Main page for unauthorized users */
const LoginScreen = props => {
  const { getPermission, isLoading } = props

  const styles = isOnLandscape ? landscapeStyles : portraitStyles

  return (
    <View style={styles.viewOuterContainer}>
      <Spinner visible={isLoading} />
      <View style={styles.viewInnerContainer}>
        <Text style={styles.weatherAppText}>Weather App</Text>
      </View>
      <View style={styles.viewInnerContainer}>
        <TouchableOpacity style={styles.button} onPress={async () => await getPermission()}>
          <Text style={styles.githubText}>LOGIN WITH GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
