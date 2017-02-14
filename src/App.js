import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import store from './state/store'
import Example from './containers/Example'

// const styles = {
//   app: {
//     paddingTop: 40,
//     textAlign: 'center',
//   },
// }

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Example />
      </Provider>
    )
  }
}
