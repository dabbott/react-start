import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import store from './state/store'
import Example from './containers/Example'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Example />
      </Provider>
    )
  }
}
