import * as React from 'react'

import { Provider } from 'react-redux'
import store from './store'
import Navigation from './Navigation'

/* Topmost part of the components */
const Root = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default Root
