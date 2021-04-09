import React from 'react'
import { View, Text, Button, Linking, TouchableOpacity, Image } from 'react-native'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import styles from './styles/landingScreenStyles'
import Spinner from 'react-native-loading-spinner-overlay'

const LandingScreen = props => {
  const { getCurrentLocation, coordinates, isLoading, setLoading } = props
  const { pictureURL, name, githubURL } = useSelector((state: RootState) => state.user.info)
  const { latitude, longitude } = coordinates

  return (
    <View style={styles.outermostView}>
      <Spinner visible={isLoading} />
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
                setLoading(true)
                await getCurrentLocation()
                setLoading(false)
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
