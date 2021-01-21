const Actions = {
  createNote: note => {
    return {
      type: 'NOTE:CREATE_NOTE',
      payload: note
    }
  },
  showLoading: () => {
    return {
      type: 'LOADING:SHOW_LOADING'
    }
  },
  hideLoading: () => {
    return {
      type: 'LOADING:HIDE_LOADING'
    }
  },
  fetchNotes: () => {
    return async dispatch => {
      dispatch(Actions.showLoading())
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      const json = await response.json()
      dispatch({ type: 'NOTE:FETCH_NOTE', payload: json })
      dispatch(Actions.hideLoading())
    }
  },
  removeNote: id => {
    return {
      type: 'NOTE:REMOVE_NOTE',
      payload: id
    }
  },
  removeNotes: () => {
    return {
      type: 'NOTE:REMOVE_NOTES'
    }
  },
  completedNote: data => {
    return {
      type: 'NOTE:COMPLETED_NOTE',
      payload: data
    }
  },
  redactionNote: data => {
    return {
      type: 'NOTE:REDACTION_NOTE',
      payload: data
    }
  }
}

export default Actions