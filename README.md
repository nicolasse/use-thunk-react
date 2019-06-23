# use-thunk-react
You can keep your actions and reducers like before with redux, but use hooks instead.

```sh
$npm install --save use-thunk-react
```

#Example

```js

//app.js

import React from 'react'
import useThunkReact from 'use-thunk-react'

import {fetchInfo} from './actions.js'
import {reducer, initialState} from './reducer.js'


function App(){
  const [state, dispatch] = useThunkReact(reducer, initialState)
  
  return(
    <>
      <button onClick={() => dispatch(fetchInfo())>
        FETCH INFO HERE
      </button>
      <span>{state.loading}<span>
    </>
  )
  export App 
}

```

```js

//reducer.js

export const initialState = {
  info: {},
  loading: false,
  error: null
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INFO_STARTED':
      return {...state, loading: true}
    case 'FETCH_INFO_SUCCESS':
      return {...state, loading: false, info: action.payload}
    case 'FETCH_INFO_STARTED':
      return {...state, loading: false: error: action.payload}
    default: 
      return state
  }
}

```

```js

//actions.js

export const fetchInfo = () => {
  return dispatch => {
    dispatch(fetchInfoStarted())
    fetch('http://myApi.com/info')
      .then( res => dispatch(fetchInfoSuccess(res)))
      .catch(e => dispatch(fetchInfoFailure(e)))
  }
}

const fetchInfoStarted = () => ({type: 'FETCH_INFO_STARTED'})
const fetchInfoSuccess = (info) => ({type: 'FETCH_INFO_SUCCESS', payload: info})
const fetchInfoFailure = (error) => ({type: 'FETCH_INFO_FAILURE', payload: error})


```
