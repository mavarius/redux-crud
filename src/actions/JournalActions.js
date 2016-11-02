export function addEntry (formData) {
  return {
    type: 'ADD_ENTRY',
    payload: { formData }
  }
}

export function deleteEntry (newJournal) {
  return {
    type: 'DELETE_ENTRY',
    payload: { newJournal }
  }
}

export function editEntry (editing) {
  return {
    type: 'EDIT_ENTRY',
    payload: { editing }
  }
}

export function updateEntry (newJournal) {
  return {
    type: 'UPDATE_ENTRY',
    payload: { newJournal }
  }
}

export function sortBy (sorting) {
  return {
    type: 'SORT_BY',
    payload: { sorting }
  }
}
