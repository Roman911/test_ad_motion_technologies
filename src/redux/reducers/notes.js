const initialState = {
  notes: []
}

const notes = (state = initialState, actions) => {
  switch (actions.type) {
    case 'NOTE:CREATE_NOTE':
      return {
        ...state,
        notes: state.notes.concat(actions.payload)
      }
    case 'NOTE:FETCH_NOTE':
      return {
        ...state,
        notes: actions.payload
      }
    case 'NOTE:REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(item => {
          return item.id !== actions.payload
        })
      }
    case 'NOTE:REMOVE_NOTES':
      return {
        ...state,
        notes: state.notes.filter(item => {
          return item.completed === false
        })
      }
    case 'NOTE:COMPLETED_NOTE':
      const { id, completed } = actions.payload
      const index = state.notes.findIndex((obj => obj.id === Number(id)))
      state.notes[index].completed = completed
      return {
        ...state,
        notes: state.notes
      }
    case 'NOTE:REDACTION_NOTE':
      const { _id, title } = actions.payload
      const indexRedaction = state.notes.findIndex((obj => obj.id === Number(_id)))
      state.notes[indexRedaction].title = title
      return {
        ...state,
        notes: state.notes
      }
    default:
      return state
  }
}

export default notes