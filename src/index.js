import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// import { ResponsiveProvider } from 'react-styles-provider'

import App from './App'

// const calculateResponsiveBreakpoints = ({width, height, isMobile}) => {
//   const attributes = []
//
//   if (width > 1280) {
//     attributes.push('large')
//   } else if (width > 800) {
//     attributes.push('medium')
//   } else {
//     attributes.push('small')
//   }
//
//   if (isMobile) {
//     attributes.push('mobile')
//   } else {
//     attributes.push('desktop')
//   }
//
//   return attributes.join('-')
// }

const root = document.querySelector('#app')
const render = () => {
  ReactDOM.render(
    <AppContainer>
      {/* <ResponsiveProvider set={calculateResponsiveBreakpoints}> */}
        <App />
      {/* </ResponsiveProvider> */}
    </AppContainer>,
    root
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', render)
}
