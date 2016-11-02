import React from 'react'
import uuid from 'uuid'

const NewEntry = (props) => {
  let handleForm = e => {
    e.preventDefault()

    let formData = {
      id: uuid(),
      target: e.target.target.value,
      level: e.target.level.value,
      location: e.target.location.value,
      date: e.target.date.value,
      note: e.target.note.value
    }

    e.target.target.value = ''
    e.target.level.value = ''
    e.target.location.value = ''
    e.target.date.value = ''
    e.target.note.value = ''

    props.addEntry(formData)
  }

  return (
    <div className="newEntry">
      <form onSubmit={handleForm}>
        <div className="formGroup">
          <label htmlFor="target">Target: </label>
          <input id="target" type="text" />
        </div>
        <div className="formGroup">
          <label htmlFor="level">Level: </label>
          <input id="level" type="number" min="0" />
        </div>
        <div className="formGroup">
          <label htmlFor="location">Location: </label>
          <input id="location" type="text" />
        </div>
        <div className="formGroup">
          <label htmlFor="date">Date: </label>
          <input id="date" type="date" />
        </div>
        <div className="formGroup">
          <label htmlFor="note">Note: </label>
          <textarea id="note" type="text" />
        </div>
        <button>Save</button>
      </form>
      <button>cancel</button>
    </div>
  )
}

export default NewEntry
