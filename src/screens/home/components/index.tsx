import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

import { getLocation } from '../../../common/location'

const Home = props => {
  return (
    <View>
      <Button title={'Press Me'} onPress={async () => await getLocation()} />
    </View>
  )
}

export default Home
