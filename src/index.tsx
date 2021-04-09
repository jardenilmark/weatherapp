/**
 * Sample React Native Init
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react'

import { Provider } from 'react-redux'
import store from './store'
import Navigation from './Navigation'

const Root = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default Root
