export default function (state = 'date', action) {
  switch (action.type) {
    case 'SORT_BY':
      return action.payload.sorting
    default:
      return state
  }
}
