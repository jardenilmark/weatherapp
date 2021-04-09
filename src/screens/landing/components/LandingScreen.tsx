import React from 'react'
import { View, Text, Button, Linking, TouchableOpacity, Image } from 'react-native'
import { RootState } from '../../../store'
import { useSelector } from 'react-redux'
import styles from './styles/landingScreenStyles'
import Spinner from 'react-native-loading-spinner-overlay'

/*
UI mostly. Logic is to be passed at the container preferably
*/
const LandingScreen = props => {
  const { getCurrentLocation, coordinates, isLoading, setLoading } = props
  const { pictureURL, name, githubURL } = useSelector((state: RootState) => state.user.info)
  const { latitude, longitude } = coordinates

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
          <Button
            title={'UPDATE LOCATION'}
            onPress={async () => {
              try {
                /* Manually update location */
                setLoading(true)
                await getCurrentLocation()
                setLoading(false)
              } catch (e) {
                /*
                Didnt pass a snackbar here since its already being caught.
                Prevent double snackbars from popping up at the same time
                 */
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
