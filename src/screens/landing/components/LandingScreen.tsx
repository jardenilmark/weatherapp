import React from 'react'
import { View, Text, Button, Linking, TouchableOpacity, Image } from 'react-native'
import { landscapeStyles, portraitStyles } from './styles/landingScreenStyles'
import Spinner from 'react-native-loading-spinner-overlay'
import { isOnLandscape } from '../../../common/dimensions'

/*
UI mostly. Logic is to be passed at the container preferably
*/
const LandingScreen = props => {
  const { getCurrentLocation, coordinates, isLoading, setLoading, pictureURL, name, githubURL, onPress } = props
  const { latitude, longitude } = coordinates

  const styles = isOnLandscape ? landscapeStyles : portraitStyles

  return (
    <View style={styles.outermostView}>
      <Spinner visible={isLoading} />
      <View style={styles.githubInfoOuterView}>
        {/* shows a circle gray view as a placeholder if no picture is available*/}
        {pictureURL ? (
          <Image style={styles.image} source={{ uri: pictureURL }} />
        ) : (
          <View style={styles.placeholderImage} />
        )}
        <Text style={styles.githubName}>{name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(githubURL)}>
          <Text style={styles.githubURL}>{githubURL}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.coordinatesView}>
        <Text style={styles.coordinatesText}>Latitude: {latitude}</Text>
        <Text style={styles.coordinatesText}>Longitude: {longitude}</Text>
        <View style={styles.buttonView}>
          <Button title={'UPDATE LOCATION'} onPress={onPress} />
        </View>
      </View>
    </View>
  )
}

export default LandingScreen
