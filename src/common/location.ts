import * as Location from 'expo-location'

export const getLocation = async () => {
  try {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      throw new Error('Permissions for location was not granted')
    }

    const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
    console.log(location)
    return location
  } catch (e) {
    console.log(e)
  }
}