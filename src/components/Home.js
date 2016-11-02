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
        <div className="sortBtns">
          <span>Sort by: </span>
          <button onClick={this.props.sortBy}>date</button>
          <button onClick={this.props.sortBy}>target</button>
          <button onClick={this.props.sortBy}>level</button>
        </div>
        <h3 className="appTitle">Journal</h3>
        <JournalEntries {...this.props} />
      </div>
    )
  }
}

let mapStateToProps = state => ({
  entries: state.entries,
  editing: state.editing,
  sorting: state.sorting
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
  },

  sortBy (e) {
    dispatch(JournalActions.sortBy(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
