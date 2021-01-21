import { combineReducers } from 'redux'
const reducers = ['notes', 'loading', 'redactionNote']

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${ name }`).default
    return initial
  }, {}),
)