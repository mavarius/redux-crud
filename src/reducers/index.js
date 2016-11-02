import { combineReducers } from 'redux'

import monsterReducer from './monsterReducer'
import editReducer from './editReducer'

export default combineReducers({
  entries: monsterReducer,
  editing: editReducer
})
