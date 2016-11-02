import { combineReducers } from 'redux'

import monsterReducer from './monsterReducer'
import editReducer from './editReducer'
import sortReducer from './sortReducer'

export default combineReducers({
  entries: monsterReducer,
  editing: editReducer,
  sorting: sortReducer
})
