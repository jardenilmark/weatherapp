import * as Location from 'expo-location'

/* Asks for permission and retrieves current location
   Refer to https://docs.expo.io/versions/latest/sdk/location/ */
export const getLocation = async () => {
  const { status } = await Location.requestPermissionsAsync()
  if (status !== 'granted') {
    throw new Error('Permissions for location was not granted')
  }

  const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })

  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  }
}
