export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [...state, action.payload.formData]
    case 'DELETE_ENTRY':
      return action.payload.newJournal
    case 'UPDATE_ENTRY':
      return action.payload
    default:
      return state
  }
}
