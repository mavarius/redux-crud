import React from 'react'
import moment from 'moment'

const JournalEntries = (props) => {
  let handleEdit = (editing) => {
    props.editEntry(editing)
  }

  let handleUpdate = e => {
    e.preventDefault()

    let formData = {
      id: props.editing,
      target: e.target.target.value,
      level: e.target.level.value,
      location: e.target.location.value,
      date: e.target.date.value,
      note: e.target.note.value
    }

    // props.updateEntry(formData)
    console.log('formData: ', formData)

    props.editEntry('')
  }

  let handleCancel = e => {
    props.editEntry('')
  }

  let handleDelete = (id) => {
    let newJournal = props.entries.filter(entry => entry.id !== id)
    props.deleteEntry(newJournal)
  }

  let renderEntries = (entries, editing) => {
    return entries.map(entry => {
      if (props.editing === entry.id) {
        return (
          <div key={entry.id} className="editEntry">
            <form onSubmit={handleUpdate}>
              <input id="date" type="date" defaultValue={entry.date} />
              <input id="target" type="text" defaultValue={entry.target} />
              <input id="level" type="number" min="0" defaultValue={entry.level} />
              <input id="location" type="text" defaultValue={entry.location} />
              <textarea id="note" type="text" defaultValue={entry.note} />
              <button type="submit">save</button>
            </form>
            <button onClick={() => handleCancel(entry.id)}>cancel</button>
          </div>
        )
      } else {
        return (
          <div key={entry.id} className="journalEntry">
            <h1>{moment(entry.date).format('MMM D, YYYY')}</h1>
            <h2>Target: {entry.target}</h2>
            <h3>Level: {entry.level}</h3>
            <h4>Location: {entry.location}</h4>
            <p>{entry.note}</p>
            <button onClick={() => handleEdit(entry.id)}>edit</button>
            <button onClick={() => handleDelete(entry.id)}>delete</button>
          </div>
        )
      }
    })
  }

  return (
    <div>
      {renderEntries(props.entries)}
    </div>
  )
}

export default JournalEntries
