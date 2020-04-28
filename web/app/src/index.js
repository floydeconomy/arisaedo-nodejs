import React from 'react'
import ReactDOM from 'react-dom'
import { AragonApi } from '@aragon/api-react'
import App from './App'

// States
const reducer = state => {
  if (state === null) {
    return {
       name: "",
       identifier: "",
       isSyncing: true
     }
  }
  return state
}

// Render
ReactDOM.render(
  <AragonApi reducer={reducer}>
    <App />
  </AragonApi>,
  document.getElementById('root')
)
