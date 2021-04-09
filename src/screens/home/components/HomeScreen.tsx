import React from 'react'
import { View, Text, Button, Linking, TouchableOpacity } from 'react-native'

import Snackbar from 'react-native-snackbar'

const dummyName = 'Mark Jardenil'
const dummyGithubLink = 'https://github.com/jardenilmark'

const Home = props => {
  const { coordinates } = props

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{dummyName}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(dummyGithubLink)}>
          <Text style={{ textAlign: 'center', color: 'blue', textDecorationLine: 'underline' }}>{dummyGithubLink}</Text>
        </TouchableOpacity>
      </View>
      <Button
        title={'SHOW LOCATION'}
        onPress={() => {
          Snackbar.show({
            text: `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`,
          })
        }}
      />
    </View>
  )
}

export default Home
