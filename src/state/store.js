import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { reducer as example } from './example'

const store = createStore(
  combineReducers({
    example,
  }),
  undefined,
  applyMiddleware(
    thunk,
  )
)

export default store
