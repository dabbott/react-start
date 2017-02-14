import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as example } from './example'

const store = createStore(
  combineReducers({
    example,
  }),
  undefined,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    )
  )
)

export default store
