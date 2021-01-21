const initialState = {
  redaction: false
}

const redaction = (state = initialState, actions) => {
  switch (actions.type) {
    case 'REDACTION:SHOW_REDACTION':
      return {
        ...state,
        redaction: actions.payload
      }
    case 'REDACTION:HIDE_REDACTION':
      return {
        ...state,
        redaction: false
      }
    default:
      return state
  }
}

export default redaction