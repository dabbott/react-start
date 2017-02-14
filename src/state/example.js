export const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
}

export const actionCreators = {
  add: (item) => {
    return {type: types.ADD_TODO, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE_TODO, payload: index}
  }
}

const initialState = {
  todos: [
    'Setup React Start',
    'Write Code',
    'Ship App',
  ],
}

const handlers = {
  [types.ADD_TODO]: (state, payload) => {
    const {todos} = state

    return {
      ...state,
      todos: [payload, ...todos],
    }
  },
  [types.REMOVE_TODO]: (state, payload) => {
    const {todos} = state

    return {
      ...state,
      todos: todos.filter((todo, i) => i !== payload),
    }
  },
}

export const reducer = (state = initialState, action) => {
  const {type, payload, error, meta} = action

  const handler = handlers[type]

  return handler ? handler(state, payload, error, meta) : state
}
