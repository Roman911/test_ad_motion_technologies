const initialState = {
  loading: false
}

const loading = (state = initialState, actions) => {
  switch (actions.type) {
    case 'LOADING:SHOW_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOADING:HIDE_LOADING':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default loading