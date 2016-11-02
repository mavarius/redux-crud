import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewEntry from './NewEntry'
import JournalEntries from './JournalEntries'

import * as JournalActions from '../actions/JournalActions'

class Home extends Component {
  componentWillMount () {
    this.props.editEntry('')
  }

  render () {
    return (
      <div className="container">
        <h2>Record New Hunt</h2>
        <NewEntry {...this.props} />
        <h3 className="appTitle">Journal</h3>
        <JournalEntries {...this.props} />
      </div>
    )
  }
}

let mapStateToProps = state => ({
  entries: state.entries,
  editing: state.editing
})

let mapDispatchToProps = dispatch => ({
  addEntry (formData) {
    dispatch(JournalActions.addEntry(formData))
  },

  editEntry (editing) {
    dispatch(JournalActions.editEntry(editing))
  },

  updateEntry (newJournal) {
    dispatch(JournalActions.updateEntry(newJournal))
  },

  deleteEntry (newJournal) {
    dispatch(JournalActions.deleteEntry(newJournal))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
