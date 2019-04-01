import { useReducer } from 'react'

const applyThunk = dispatch => action => {
  if(typeof action === 'function')
    return action(dispatch)
  return dispatch(action)
}

const useThunkReact ( reducer, initialState ) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, applyThunk(dispatch)]
}

export default useThunkReact
