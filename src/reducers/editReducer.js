export default function (state = '', action) {
  switch (action.type) {
    case 'EDIT_ENTRY':
      return action.payload.editing
    default:
      return state
  }
}
