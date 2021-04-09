import React from 'react'
import { View, Text, Button, Linking, TouchableOpacity, Image } from 'react-native'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import styles from './styles/LandingScreenStyles'

const LandingScreen = props => {
  const { getCurrentLocation, coordinates } = props
  const { pictureURL, name, githubURL } = useSelector((state: RootState) => state.user.info)
  const { latitude, longitude } = coordinates

  return (
    <View style={styles.outermostView}>
      <View style={styles.githubInfoOuterView}>
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
          <Button
            title={'UPDATE LOCATION'}
            onPress={async () => {
              try {
                await getCurrentLocation()
              } catch (e) {
                console.log(e)
              }
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default LandingScreen
