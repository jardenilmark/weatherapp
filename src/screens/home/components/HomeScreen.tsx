import React from 'react'
import { View, Text, Button, Linking, TouchableOpacity } from 'react-native'

const dummyName = 'Mark Jardenil'
const dummyGithubLink = 'https://github.com/jardenilmark'

const HomeScreen = props => {
  const { getCurrentLocation } = props

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
        onPress={async () => {
          try {
            await getCurrentLocation()
          } catch(e) {
            console.log(e)
          }
        }}
      />
    </View>
  )
}

export default HomeScreen
